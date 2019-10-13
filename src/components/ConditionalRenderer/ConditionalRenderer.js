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

const ConditionalRenderer = (Component: Object) => {
  return (props: Object): React$Node => {
    const { err, pending, result, apiCall } = props;

    useEffect(apiCall, []);

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
    return <Component result={result} />;
  };
};

export default ConditionalRenderer;
