const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    // 配置插件，使项目支持less语法，/* TODO 固定的写法 */
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 配置webpack的一些额外的配置
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
}
