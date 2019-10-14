/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of categories in the recipes section
 * @flow
 */

import React, { useEffect } from 'react';
import AppSafeArea from 'components/AppSafeArea/AppSafeArea';
import Loader from 'components/Loader/Loader';
import ExceptionBox from 'components/ExceptionBox/ExceptionBox';
import { toTitleCase } from 'utils/string';

type Props = {
  err?: string,
  pending?: boolean,
  result?: any,
  apiCall?: Function,
  navigation: Object,
};

const ConditionalRenderer = (Component: Object) => {
  const ConditionalComp = (props: Props): React$Node => {
    const { err, pending, result, apiCall, navigation } = props;
    let renderComp = () => <></>;

    if (typeof apiCall === 'function') {
      useEffect(apiCall, []);
    }

    // Pass result as a prop to the component
    renderComp = () => <Component {...props} navigation={navigation} />;

    // Data empty/null state
    if (Array.isArray(result) && !result.length) {
      renderComp = () => (
        <ExceptionBox title="OOPS!" message="The list seems to be empty :(" />
      );
    }

    // Data loading state
    if (pending) {
      renderComp = () => <Loader />;
    }

    // Error state
    if (err) {
      renderComp = () => <ExceptionBox title="OOPS!" message={err} />;
    }

    // Handle any other conditions based on project development

    return <AppSafeArea>{renderComp()}</AppSafeArea>;
  };

  ConditionalComp.navigationOptions = ({ navigation }: Object) => {
    return {
      header: null,
      headerBackTitle: toTitleCase(navigation.state.routeName.toLowerCase()),
    };
  };

  ConditionalComp.defaultProps = {
    err: '',
    result: [],
    apiCall: () => {},
    pending: false,
  };

  return ConditionalComp;
};

export default ConditionalRenderer;
