const chromeConfig = require('./chrome.conf');
const merge = require('deepmerge');

exports.config = merge(chromeConfig.config, {
    // environment: process.env.TEST_ENV = 'uat',
    runner: 'local',
    specs: [
        './test/web/specs/example.e2e.js',
    ],
    suites: {
        smoke: [
                        
        ],
        regression: [
            
        ],
    },
    exclude: [
        
    ],
    
});