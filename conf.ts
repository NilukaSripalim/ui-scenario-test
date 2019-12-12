import {Config, browser} from 'protractor';

export let config: Config = {

    framework: 'jasmine',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {'args': ['disable-infobars']}
    },

    specs: [ './specs/login.js' ],

    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        // doing a browser.get will lead to a transpile error.
        // undefined does not have a get method
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};