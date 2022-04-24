#!/usr/bin/env node
import putout from 'putout';
import fs from 'fs';
const source = fs.readFileSync(process.argv[2], 'utf8');

let result = putout(source, {
    plugins: [
        'remove-unused-variables',
        'my-transform', // searches for putout-plugin-my-transform.js
    ],
});
console.log(result.code);