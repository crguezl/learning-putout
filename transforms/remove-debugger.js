// this is a message to show in putout cli
module.exports.report = () => 'Unexpected "debugger" statement';

// let's find all "debugger" statements and replace them with ""
module.exports.replace = () => ({
    debugger: '',
});