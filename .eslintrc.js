module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: [
        '*.spec.js',
        '**/__mocks__/*.js',
        'loadershim.js',
        'enzyme-setup.js',
        'jest-preprocess.js',
      ],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          "error",
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
      },
    },
  ],
};
