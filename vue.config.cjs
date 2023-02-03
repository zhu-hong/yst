const { defineConfig } = require('@vue/cli-service')
const axios = require('axios')
const { DefinePlugin } = require('webpack')
const WindiCSS = require('windicss-webpack-plugin')
const Nested = require('postcss-nested')

module.exports = defineConfig(async () => {
  const _ENV = process.env.RUNTIME_ENV

  const { data: ENVS } = await axios.get('https://dl-res.effio.cn/envList.json')

  return {
    transpileDependencies: true,
    publicPath: '',
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
      plugins: [
        new DefinePlugin({
          RUNTIME_ENV: JSON.stringify(_ENV),
          RUNTIME_MODE: JSON.stringify(process.env.NODE_ENV === 'production' ? 'build' : 'serve'),
          API_URL: JSON.stringify(ENVS[_ENV].api),
          ACCOUNT_URL: JSON.stringify(ENVS[_ENV].account),
          HOME_URL: JSON.stringify(ENVS[_ENV].webhomepage),
          BUILD_TIME: JSON.stringify(new Date().toLocaleString()),
        }),
        new WindiCSS(),
      ],
      optimization: {
        splitChunks: {
          cacheGroups: {
          },
        },
      },
    },
    css: {
      loaderOptions: {
        postcss: {
          postcssOptions: {
            plugins: [
              Nested(),
            ],
          },
        },
      },
    },
  }
})
