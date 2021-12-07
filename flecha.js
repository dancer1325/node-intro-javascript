// Función de flecha 1º forma:
function sumarFirstway(a, b) {
    return a + b;
}
console.log(sumarFirstway(10, 20));

// Arrow function, 2º way
const sumarSecondWay = (a, b) => a + b;
console.log(sumarSecondWay(5, 10));

// Arrow function, 3º way, in several rows
let sumarThirdWay = (a, b) => {
    return a + b;
}
console.log(sumarThirdWay(10, 20));

function saludarNormalFunction() {
    return 'Hola Mundo';
}
console.log(saludarNormalFunction); // Returning the object function itself
console.log(saludarNormalFunction());

const saludarArrowFunction = () => 'Hola Mundo';
console.log(saludarArrowFunction());


//Functions with template string
function saludarTemplateString(nombre) {
    return `Hola ${ nombre }`;
}
console.log(saludarTemplateString('Fernando'));

let saludarTemplateStringArrowFunction = nombre => `Hola ${ nombre }`
console.log(saludarTemplateStringArrowFunction('Fernando'));

// Difference between normal function vs arrow function
// 1) this
//Transformamos la función de getNombre() de destructuracion.js en una función de flecha
//let deadpool = {
//    nombre: 'Wade',
//    apellido: 'Winston',
//    poder: 'Regeneración',
//    getNombre: function() {
//        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
//    }
//};

// Wrong attempt
let deadpoolwrongAttempt = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: (heroe) => {
        console.log(this); // Arrow function -- This points to the parent scope
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};
console.log("deadpoolwrongAttempt:", deadpoolwrongAttempt.getNombre());

//Solución utilizando funciones normales
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        console.log(this); // Normal function -- This points to the own object 
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};
console.log("deadpool:", deadpool.getNombre());