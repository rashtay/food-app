/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * @flow
 */
import React from 'react';
import Root from 'root';

if (typeof global.self === 'undefined') {
  global.self = global;
}

// Run the application by mounting the root file.
const App = () => <Root />;

export default App;
