import putout from 'putout';
const source = `
    const hello = 'world';
    const hi = 'there';
    
    console.log(hello);
`;

let result = putout(source, {
    plugins: [
        'remove-unused-variables',
    ],
});
/* returns
({
    code: `\n    const hello = 'world';\n\n    console.log(hello);\n`,
    places: [],
});
*/
console.log(result);