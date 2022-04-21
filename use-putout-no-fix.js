#!/usr/bin/env node
import putout from 'putout';
const source = `
    const hello = 'world';
    const hi = 'there';
    
    console.log(hello);
`;

let result = putout(source, {
    fix: false,
    plugins: [
        'remove-unused-variables',
    ],
});

/* returns
{
  "code": "\n    const hello = 'world';\n    const hi = 'there';\n    \n    console.log(hello);\n",
  "places": [
    {
      "rule": "remove-unused-variables",
      "message": "'hi' is defined but never used",
      "position": {
        "line": 3,
        "column": 10
      }
    }
  ]
}
*/
console.log(JSON.stringify(result, null, 2));