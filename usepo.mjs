#!/usr/bin/env node
import putout from 'putout';
import fs from 'fs';
const source = fs.readFileSync(process.argv[2], 'utf8');

let result = putout(source, {
    plugins: [
        'remove-unused-variables',
        'my-transform',
    ],
});
/* returns
({
    code: `\n    const hello = 'world';\n\n    console.log(hello);\n`,
    places: [],
});
*/
console.log(result.code);