module.exports.report = () => 'from chazam! in fix-example!';

module.exports.include = () => [ 'debugger', ];

module.exports.fix = (path) => { path.remove(path); };
