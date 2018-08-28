const path = require('path');
const myIP = require('my-ip');

module.exports = {
    development: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000,
        clientIp: myIP(),
        assetsSubDirectory: 'static',
        cdn: '',
        api: '',
        base: '',
        fmbase: ''
    },
    production: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        cdn: '',
        api: '',
        base: '',
        fmbase: ''
    }
};