const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'production') {
    module.exports = require('./config/webpack.prod.config.js');
} else {
    module.exports = require('./config/webpack.dev.config.js');
}