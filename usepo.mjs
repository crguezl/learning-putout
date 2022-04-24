#!/usr/bin/env node
import putout from 'putout';
import fs from 'fs';
const inputFilename = process.argv[2] || 'input-for-my-transform.js';
const source = fs.readFileSync(inputFilename, 'utf8');
console.log(`----${inputFilename}----\n${source}\n`);
const transfomName = process.argv[3] || 'my-transform';
transfomName.replace(/^trasforms\/putout-plugin-/, '');
let result = putout(source, {
    plugins: [ transfomName],
});
console.log(`----Transformed Code----\n${result.code}\n`);