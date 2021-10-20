const baseConfig = require('../wdio.conf.base');
const suite = require('../../suites/suite');
const merge = require('deepmerge');
exports.config = merge.all([baseConfig.config, suite.config, {
    maxInstances: 10,
    capabilities: [
        {
            // Configuraciones básicas
            platformName: 'Android',
            maxInstances: 1,
            browserName: 'chrome',
            'appium:platformVersion': '9.0',
            'appium:deviceName': 'Teco',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:newCommandTimeout': 240,
            'appium:unlockType': 'pin',
            'appium:unlockKey': '1234',
            'appium:autoGrantPermissions': 'true',
        }
    ],
    path: '/wd/hub',
    port: 4723,
    services: ['appium'],
}]);