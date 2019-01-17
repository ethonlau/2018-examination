module.exports = {
  indexPath: '../index.html',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/2018-examination/dist'
    : '/'
}