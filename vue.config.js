module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/animation-landing/' // note the trailing slash
    : '/',
}