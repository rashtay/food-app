/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of categories in the recipes section
 * @flow
 */

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Loader from 'components/Loader/Loader';

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

    if (typeof apiCall === 'function') {
      useEffect(apiCall, []);
    }

    // Data loading state
    if (pending) {
      return <Loader />;
    }

    // Error state
    if (err) {
      return (
        <View>
          <Text>OOPS!</Text>

          <Text>{err}</Text>
        </View>
      );
    }

    // Data empty/null state
    if (Array.isArray(result) && !result.length) {
      return (
        <View>
          <Text>The list seems to be empty :(</Text>
        </View>
      );
    }

    // Handle any other conditions based on project development

    // Pass result as a prop to the component
    return <Component result={result} navigation={navigation} />;
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
