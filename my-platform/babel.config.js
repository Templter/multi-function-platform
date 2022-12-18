// 判断是否生产环境
const isProduction = process.env.NODE_ENV === 'production'
const pluginVxeTable = [
  'import',
  {
    libraryName: 'vxe-table',
    style: true
  }
]

const plugins = [pluginVxeTable]
isProduction ? plugins.push(['transform-remove-console']) : ''
module.exports = {
  // 生产环境移除console
  // plugins: isProduction ? ['transform-remove-console'] : [],
  plugins: plugins,
  presets: [['@vue/cli-plugin-babel/preset', { useBuiltIns: 'entry' }]]
}
