'use strict'
const path = require('path')
const utils = require('./utils') // util是对vue-loader对于css预编译一些提取的工具模块，因为对于个人开发而言，在里面提供了，sass,less,stylus,possCss等一系列预编译解析的loader
const config = require('../config') // config是对开发环境和生产环境的一系列不同参数的，路径等配置
const vueLoaderConfig = require('./vue-loader.conf') // vueLoaderConfig也是同样基础生产环境和开发环境对vue-loader进行的配置

function resolve(dir) { // 这封装了一个函数，进行传参，获取绝对路径，方便对import时引入地址的方便填写
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : process.env.NODE_ENV === 'testing'
        ? config.test.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~': resolve('packages'),
      '*': resolve('/'),
      scss: resolve('scss'),
      http: resolve('src/base/http.base'),
      plugins: resolve('plugins'),
      assets: resolve('src/assets'),
      'vue-router': 'vue-router/dist/vue-router.common.js',
      vuex: resolve('node_modules/vuex'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('packages'),
          resolve('plugins')
        ],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader', // vue-loader会解析这个文件中的每个语言块，然后传输到其它的loaders,vue-loader通过指定语言块的lang属性支持css预编译、html编译模板等语言格式。如在组件的style块中使用sass
        include: [
          resolve('src'),
          resolve('test'),
          resolve('packages'),
          resolve('plugins')
        ],
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('packages'),
          resolve('plugins'),
          resolve('config')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10, // 对于url-loader来说 limit10000代表当小于1000kb的文件我们则可以转为base64
          name: utils.assetsPath('/img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
