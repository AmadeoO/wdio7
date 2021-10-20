const baseConfig = require('../wdio.conf.base');
const suite = require('../../suites/suite');
const merge = require('deepmerge');

exports.config = merge.all([baseConfig.config, suite.config, {
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
}]);