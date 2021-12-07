var nombreVar = 'Wolverine';
// var shouldn't be used normally
// 1) It creates globally the variable
// 2) Initialize although it's indicated the type aferwards
// 3) Declare after using it
initializeFirst = 'Weird';

const nombre = 'Wolverine';
// 1) Immutable
// 2) They are lighter

if (true) {
    //Si imprimiéramos la variable "nombre", daría un error porque la anterior declaración
    //es para el scope de fuera
    //console.log(nombre);

    let nombre = 'Magneto';
    // 1) Define a variable at context level

    console.log(nombre);
}

console.log(nombre);
console.log(nombreVar);

var initializeFirst;
console.log(initializeFirst);

console.log(notDeclared);
var notDeclared;

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}
//Sacaría un 6, porque la variable i está inicializada y declara a 6, pero en ese momento
//no cumple la condición del for, y no entra; pero su valor ya es 6
console.log(i);

let j;


for (let j = 0; j <= 5; j++) {
    console.log(`j: ${ j }`);
}
// let is vinculated to the scope --> Outside the loop its value is "undefined"
console.log(j);