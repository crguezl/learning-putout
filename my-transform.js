// Copy this file to ~/.putout
module.exports.report = () => `Identifiers should be swapped`;

module.exports.replace = () => ({
    'let __a = __b': 'const __b = __a'
});

