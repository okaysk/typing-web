const isProd = process.env.NODE_ENV === 'production'
const name = 'typing-web'

module.exports = {
    assetPrefix: isProd ? `/${name}/` : '',
    reactStrictMode: true,
}
