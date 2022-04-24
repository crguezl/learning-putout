const unused = 5;

module.exports = function() {
    return promise();
};

async function promise(a) {
    return Promise.reject(Error('x'));
}