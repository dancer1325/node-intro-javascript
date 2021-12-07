let getNombre = () => {
    return "Fernando";
};
console.log(getNombre());

let getNombreAsync = async() => {
    return "Fernando";
};
console.log(getNombreAsync()); // Return of an async function it's a promise

//Comprobación que el async es lo mismo que una promesa
let getNombreConPromesas = () => {
    return new Promise((resolve, reject) => {
        resolve("Fernando");
    });
};
console.log(getNombreConPromesas()); // It returns the same as an async function

//También permite hacer then y catch, ya que es como una promesa
getNombreAsync()
    .then((nombre) => {
        console.log(`Comprobación async es como una promesa `, nombre);
    })
    .catch((e) => {
        console.log(`Error en async `, e);
    });

//Comprobación de atrapar los errores de async() en un catch()
let getNombreAsyncCatchError = async() => {
    undefined.nombre; // Trigger it an error to test the catch functionality
    return "Fernando";
};
getNombreAsyncCatchError()
    .then((nombre) => {
        console.log(`Comprobación async es como una promesa `, nombre);
    })
    .catch((e) => {
        console.log(`Error en async `, e);
    });

//Lanzar un error
let getNombreLanzarError = () => {
    throw new Error(`No existe un nombre para ese usuario`);
};
// getNombreLanzarError(); // If you don't catch it --> It will stop executing the rest of the file

//Hacer cosas asíncroncas
//A) SetTimeOut()
let getNombreTimeOut = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fernando");
        }, 3000);
    });
};
getNombreTimeOut()
    .then((nombre) => {
        console.log(nombre);
    })
    .catch((err) => {
        console.log(err);
    });

//B) Manejando el resolve de una promesa; sin traerme el resultado porque no espera a obtener let nombre
let saludoPromesa = async() => {
    let nombre = getNombreTimeOut().then((nombre) => {
        console.log(nombre);
    });
    console.log(`Cosa a revisar ${nombre}`);
    return `Hola ${nombre}`;
};
console.log("pRUEBA ", saludoPromesa());

//C) await para esperar a que suceda algo
let saludoAwait = async() => {
    let nombre = await getNombreTimeOut(); // It's only posible to add await for async functions
    return `Hola ${nombre}`;
};
saludoAwait().then((mensaje) => {
    console.log(mensaje);
});

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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        // const empleado = empleados.find((e) => e.id === id) ? .nombre; // How to change auto formatting on save/
        const empleado = empleados.find((e) => e.id === id);
        empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });
};

const getSalario = () => {
    return new Promise((resolve, reject) => {
        // const salario = salarios.find((s) => s.id === id) ? .salario; // How to change auto formatting on save/
        const salario = salarios.find((s) => s.id === id);
        salario ? resolve(salario) : reject(`No existe salario con id ${id}`);
    });
};

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }
};

const id = 3;

getInfoUsuario(id)
    .then((msg) => {
        console.log("TODO BIEN!");
        console.log(msg);
    })
    .catch((err) => {
        console.log("TODO MAL!");
        console.log(err);
    });