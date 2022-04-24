#!/usr/bin/env node
import putout from 'putout';
import fs from 'fs';
const inputFilename = process.argv[2] || 'inputs/input-for-my-transform.js';
const source = fs.readFileSync(inputFilename, 'utf8');
console.log(`----${inputFilename}----\n${source}\n`);
import plugins from './plugins.mjs';
//import rules from './rules.mjs';
//transfomName.replace(/^trasforms\/putout-plugin-/, '');
let result = putout(source, {
    fix: true,
    plugins: plugins, 
    //rules: rules
});
console.log(`----Transformed Code----\n${result.code}\n`);