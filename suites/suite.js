exports.config = {
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
        api: [
          
        ],
    },
    exclude: [
        
    ],
    
};