module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential'
  ],
  rules: {
    semi: [0],
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
    'compilerOptions': {
      "strict": true,
    },
    'prettier/prettier': [
      1,
      {
        parser: 'flow',
        printWidth: 100,
        singleQuote: true,
        semi: false,
        arrowParens: 'always',
        jsxBracketSameLine: true,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ]
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    requireConfigFile: false
  }
}
