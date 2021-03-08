module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'nerwork': '@/nerwork',
        'views': '@/views',
      }
    }
  }
}