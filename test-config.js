exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: 'info',
    frameworks: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstance: 1, 
    sync: true
}