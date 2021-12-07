const empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

let getEmpleado0 = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id) // find run all the array and return the element which matches the conditions indicated
    console.log(empleadoDB);
}
getEmpleado0(1);
getEmpleado0(2);
getEmpleado0(5);

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);
    // const empleado = empleados.find(e => e.id === id) ? this : null; // this points to the context
    // const empleado = empleados.find(e => e.id === id) ? this.nombre : null;
    // const empleado = empleados.find(e => e.id === id) ? .nombre; // It's not interpreted correctly because it adds a whitespace
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
}
getEmpleado(10, (err, empleado) => {
    console.log(empleado); // Without handling the error properly
});
getEmpleado(10, (err, empleado) => {
    if (err) { // Handling the error properly
        return console.log(err);
    }
    console.log(empleado);
});
getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id);
    if (salario) {
        callback(null, salario);
    } else {
        callback(`No existe salario para el id ${ id }`);
    }
}
getSalario(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

// Call-back into callbacks
const id = 3;
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })
})

let idToTest = 2;
getEmpleado(idToTest, (err, empleado) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(idToTest, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })
})