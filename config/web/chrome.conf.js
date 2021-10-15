const baseConfig = require('../wdio.conf.base');
const merge = require('deepmerge');

exports.config = merge(baseConfig.config, {
    maxInstances: 10,
    capabilities: [
        // maxInstances can get overwritten per capability.
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--ignore-certificate-errors']
                // '--start-fullscreen',
            }
        }
    ],
});