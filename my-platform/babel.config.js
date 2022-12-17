module.exports = {
  presets: [
    // '@vue/app'
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'cctp-antv-lib',
        styleLibrary: {
          name: 'theme',
          base: false
        }
      }
    ]
  ]
}
