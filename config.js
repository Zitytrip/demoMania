var path = require('path'), config;

config = {
    production: {
        server: {
            host: '0.0.0.0',
            port: '80'
        }
    },
    development: {
        server: {
            host: '0.0.0.0',
            port: '9090'
        }
    }
};

module.exports = config;
