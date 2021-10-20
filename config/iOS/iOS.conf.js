const baseConfig = require('../wdio.conf.base');
const suite = require('../../suites/suite');
const merge = require('deepmerge');
exports.config = merge.all([baseConfig.config, suite.config, {
    maxInstances: 10,
    capabilities: [
        {
            // Configuraciones básicas
            platformName: 'iOS',
            maxInstances: 1,
            'appium:platformVersion': '14.5', 
            'appium:deviceName': 'iPhone 12', 
            'appium:orientation': 'PORTRAIT', 
            'appium:automationName': 'XCUITest',
            'appium:newCommandTimeout': 240, 
            'appium:udid': 'A64398DA-476A-4E74-8E9E-932512E62A66',
            'browserName':'safari',
            'appium:autoGrantPermissions': 'true', 
            'appium:noReset': 'false',
        }
    ],
    path: '/wd/hub',
    port: 4723,
    services: ['appium'],
}]);