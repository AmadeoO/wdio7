exports.config = {
    runner: 'local',
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    bail: 0,
    noFanTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }
        ],
        // ['junit', {
        //     outputDir: 'jUnitReport',
        //     outputFileFormat: function(options) { // optional
        //         return `results-${options.cid}.${options.capabilities}.xml`
        //     }
        // }]
    ],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 180000,
        require: ['@babel/register']
    },
    before: function (capabilities, specs) {
        const chai = require('chai')
        global.expect = chai.expect
        chai.Should()
    }
}