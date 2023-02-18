module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    es6: true,
    browser: true
  },
  extends: [
    '@vue/prettier',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/base'
  ],
  rules: {
    semi: [0],
    "@typescript-eslint/no-explicit-any": ["off"],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [
      1,
      {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] //需要忽略的组件名
      }
    ],
    'prettier/prettier': [
      0,
      {
        printWidth: 100,
        singleQuote: true,
        semi: false,
        arrowParens: 'always',
        jsxBracketSameLine: true
      }
    ]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint']
}
