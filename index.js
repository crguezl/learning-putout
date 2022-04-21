'use strict';

module.exports = async () => await promise();

function promise() {
    return Promise.reject(Error('x'));
}