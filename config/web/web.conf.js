const baseConfig = require('../wdio.conf.base.js');
const merge = require('deepmerge');

exports.config = merge(baseConfig.config, {
    services: ['selenium-standalone'],
    waitforTimeout: 40000,
    baseUrl: 'https://www.amazon.com/',
    afterTest: function (test) {
        if (test.error !== undefined)
            browser.takeScreenshot();
    },
    afterSuite: function (suite) {
        browser.deleteAllCookies()
    }
});