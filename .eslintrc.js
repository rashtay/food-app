module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    'react-native/react-native': true,
  },

  plugins: [
    'import',
    'react',
    'jsx-a11y',
    'react-hooks',
    'react-native',
    'flowtype',
    'json',
    'filenames',
    'prettier',
  ],

  extends: [
    '@react-native-community',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:flowtype/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],

  rules: {
    'no-magic-numbers': 2,
    'no-console': 2,

    // React
    'react/prop-types': 0, // Since we are using flow, we don't this rule
    'react/jsx-filename-extension': 0,
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-props-no-spreading': [
      2,
      {
        custom: 'ignore',
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],

    // imports
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/order': 2,

    // spacing
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],

    // make it meaningful
    'prefer-const': 2,

    // keep it simple
    complexity: 0,

    // filename convention
    'filenames/match-exported': [2, ['kebab', 'pascal'], null, true],
    'filenames/no-index': 2,
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    'react-native/style-sheet-object-names': ['EStyleSheet'],
    'import/resolver': {
      'babel-module': {
        alias: {
          assets: './assets',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    },
  },
};
