const empleados = [{
        id: 1,
        nombre: "Fernando",
    },
    {
        id: 2,
        nombre: "Linda",
    },
    {
        id: 3,
        nombre: "Karen",
    },
];

const salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];
// Promises allow
// 1) Executing either sync or async task
// 2) If it's async --> Doing a task in consequence
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        // const empleado = empleados.find(e => e.id === id) ? .nombre; // Find a solution about the auto formatting on save
        const empleado = empleados.find((e) => e.id === id);

        empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
        // resolve and reject just accept 1 argument. If you want several --> wrap it
    });
};
// Without controlling resolve nor reject
// getEmpleado(1); // If you don't do anything with the resolve --> Nothing will happen
// getEmpleado(10); //If you don't catch the error, and it enters into the reject --> It will throw an error and won't continue executing the rest of the file

// Controlling both
getEmpleado(1).then(
    (empleado) => {
        console.log("B) Empleado ", empleado);
    },
    (err) => {
        console.log(err);
    }
);
// 1) With err into then and without catch
getEmpleado(11).then(
    (empleado) => {
        console.log("B) Empleado ", empleado);
    },
    (err) => {
        console.log(err);
    }
);
// 2) With catch
getEmpleado(11)
    .then((empleado) => console.log(empleado))
    .catch((err) => console.log(err));

// Another function with resolve and reject
const getSalario = () => {
    return new Promise((resolve, reject) => {
        // const salario = salarios.find(s => s.id === id) ? .salario; //  Find a solution about the auto formatting on save
        const salario = salarios.find((s) => s.id === id);
        salario ? resolve(salario) : reject(`No existe salario con id ${id}`);
    });
};
const id = 3;
getSalario(id)
    .then((salario) => console.log(salario))
    .catch((err) => console.log(err));

// Function invoking several times the resolve
// 1) resolve will be invoked just 1
let getSalarioWithSeveralResolves = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
            console.log("Checking if it's executed"); // It's not executed
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id,
            });
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id,
            });
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id,
            });
        }
    });
};
getSalarioWithSeveralResolves(empleados[0]).then(
    (empleadoYSalario) => {
        console.log(empleadoYSalario);
    },
    (err) => {
        console.log(err);
    }
);
getSalarioWithSeveralResolves(empleados[10]).then(
    (empleadoYSalario) => {
        console.log(empleadoYSalario);
    },
    (err) => {
        console.log(err);
    }
);

// Promises in chain
let nombre;
getEmpleado(id)
    .then((empleado) => {
        nombre = empleado;
        return getSalario(id); // Invoke another function with a promise into it --> You need to return it
    })
    .then((salario) =>
        console.log("El empleado:", nombre, "tiene un salario de:", salario)
    )
    .catch((err) => console.log(err)); // It catchs an error coming from all of the previous promises

getEmpleado(1) // Why is it picking it always 3?
    .then((empleado) => {
        nombre = empleado;
        return getSalario(1); // Invoke another function with a promise into it --> You need to return it
    })
    .then((salario) =>
        console.log("El empleado:", nombre, "tiene un salario de:", salario)
    )
    .catch((err) => console.log(err)); // It catchs an error coming from all of the previous promises