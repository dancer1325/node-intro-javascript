const nombre = 'Deadpool';
const real = 'Wade Winston';

//Concatenation of strings
const normal = nombre + ' ' + real;
// Literal template of strings -- `   ` 
// 1) Evaluate expressions or interpolation
const template = `${ nombre } ${ real }`;
console.log(`${ 1 + 2 } ${real}`);

console.log(normal);
console.log(template);
console.log(normal === template); // They are identicals

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`; // It also takes in consideration line break -- That's why it's named literal

console.log(html);

//It can be used as return of a function
function getNombre() {
    return `${ nombre } ${ real }`;
}
console.log(`El nombre de: ${ getNombre() }`);