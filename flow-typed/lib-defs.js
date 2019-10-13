/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Type definitions for libraries incompatible with current versionn of flow
 * @flow
 */
declare module 'react-native' {
  declare module.exports: any;
}

declare module 'redux-persist' {
  declare module.exports: any;
}

declare module 'redux-persist/lib/storage' {
  declare module.exports: any;
}

declare module 'redux-persist/lib/stateReconciler/autoMergeLevel2' {
  declare module.exports: any;
}

declare module 'redux-persist/lib/integration/react' {
  declare module.exports: any;
}

declare module 'react-navigation' {
  declare module.exports: any;
}

declare module 'react-native-linear-gradient' {
  declare module.exports: any;
}

declare module 'react-native-firebase' {
  declare module.exports: any;
}

declare module 'react-native/Libraries/vendor/emitter/EventEmitter' {
  declare module.exports: any;
}

declare module 'buffer' {
  // The export of this module is an object with a "Buffer" Object
  declare module.exports: {
    Buffer: Object,
  };
}

declare module 'RelativeImageStub' {
  declare module.exports: any;
}

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};
