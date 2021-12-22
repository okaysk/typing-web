const isProd = process.env.NODE_ENV === 'production'
const name = 'typing-web'

console.log(process.env.NODE_ENV)

module.exports = {
    assetPrefix: isProd ? `/${name}/` : '',
    // assetPrefix: '',
    reactStrictMode: true,
}
