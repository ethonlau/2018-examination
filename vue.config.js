module.exports = {
  indexPath: '../index.html',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/2018-examination/dist'
    : '/'
}