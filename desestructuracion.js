// Types of desestructuraion
// 1) Objects
// 2) Arrays
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    // As object, you can also define functions
    getNombreDeclaringAsFunction: function() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }` // This is related to the scope
    },
    getNombre() { // From ES6, it's not necessary declare it, indicating that it's a function
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

// Extracting without desustructuration
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
console.log(`${nombre} ${apellido} has got the power ${poder}`);

// Desustructuration can be used to extract all the whished attributes
// 1) In case that some variable isn't defined --> It will be undefined its value
let { edad, mirada } = deadpool;
console.log(edad, mirada);

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad); // You can include all arguments that you want
}

function imprimeHeroeTwoWay(heroe) { // Doing the same in several steps
    let { nombre, apellido, poder, edad = 0 } = heroe;
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad); // You can include all arguments that you want
}

imprimeHeroe(deadpool); // Desestructuring, we extract the attributes directly
imprimeHeroeTwoWay(deadpool);

// Desestructuration of an array
const heroes = ['Deadpool', 'Superman', 'Batman'];

// Extracting without desustructuration
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
// console.log(h1, h2, h3);

let [heroe1, heroe2, heroe3] = heroes; // As it's an array to desestructure --> It's indicated with []
console.log(heroe1, heroe2, heroe3);

const [, , h3] = heroes; // Extracting just 1 of the elements of the array
console.log(h3);