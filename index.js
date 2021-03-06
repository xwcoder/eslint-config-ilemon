const { OFF, WARN, ERROR } = require('./constants')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  globals: {},
  plugins: ['jest', 'sonarjs', 'import'],
  rules: {
    // disallow reassigning function parameters, but props
    'no-param-reassign': [ERROR, { props: false }],
    'max-len': [WARN, { code: 120 }],
    // disallow semicolons
    'semi': [ERROR, 'never'],
    'padded-blocks': [OFF],
    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [ERROR, 'always'],
    'comma-dangle': [OFF],
    // allow assignment operators in conditional statements
    'no-cond-assign': [OFF],
    // allow the unary operators ++ and --
    'no-plusplus': [OFF],
    // disallow empty block statements
    'no-empty': [ERROR, { allowEmptyCatch: true }],
    // disallow multiple empty lines
    'no-multiple-empty-lines': [ERROR, { max: 2, maxEOF: 1 }],
    // require destructuring from objects
    'prefer-destructuring': [ERROR, { object: true, array: false }],
    // disallow unused variables
    'no-unused-vars': [ERROR],
    'no-console': [WARN],

    'import/prefer-default-export': [OFF],
    'import/no-extraneous-dependencies': [OFF]
  }
}
