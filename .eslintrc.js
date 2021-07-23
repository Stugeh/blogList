module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
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
    'cypress',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always',
    ],
    'arrow-spacing': [
      'error', { before: true, after: true },
    ],
    'no-console': 'error',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'jest/expect-expect': [
      1,
      {
        assertFunctionNames: ['expect', 'fc.assert', 'cy.contains', 'expect\\$'],
      },
    ],
  },
}
