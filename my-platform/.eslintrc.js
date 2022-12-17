module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [
      1,
      { 
        'vars': 'local',
        'args': 'none',
        'ignoreRestSiblings': true,
        'argsIgnorePattern': '^_' 
      }
    ],
    'prettier/prettier': [
      1,
      {
        printWidth: 100,
        singleQuote: true,
        semi: false,
        arrowParens: 'always',
        jsxBracketSameLine: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
