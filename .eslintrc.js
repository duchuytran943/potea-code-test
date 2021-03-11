module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'no-useless-escape': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'object-shorthand': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    eqeqeq: 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
