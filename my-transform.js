// Copy this file to ~/.putout
module.exports.report = () => `Repeated expressions in sums are transformed onto multiplication.`;

module.exports.replace = () => ({
    '__b + __b': '2 * __b'
});