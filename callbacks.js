// Typical js callback function
// setTimeout( () => {
//     console.log('Hola Mundo');
// } , 1000 );

// Necessary to add the callback as function's argument
const getUsuarioByID = (id, callback) => {
    const user = {
        //id: id        From ES6 isn't needed indicate it, since the object's attribute === variable
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)
}

// getUsuarioByID(10, (usuario) => {
//     console.log(usuario.id);
//     console.log(usuario.nombre.toUpperCase());
// });

//Hacemos una función flecha con una lógica que simule como si fuera una llamada a bbdd 
let getUsuarioByIdError = (id, callback) => {
        let usuario = {
            nombre: 'Fernando',
            id
        }
        if (id === 20) {
            callback(`El usuario con id ${ id }, no existe en la BD`); // If it's not callback's argument --> It will be interpreted as error
        } else {
            callback(usuario);
        }
    }
    // Callback function accepts several arguments. Even adding as first argument, an error
    // If you are running in a nodemon mode, and you adjust the function, adding an argument --> It won't be interpreted 
getUsuarioByIdError(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});
// Indicating a valid argument
getUsuarioByIdError(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});



//Callback en la que pasamos el parámetro error, porque sino, no entenderá que hay un error. De esta forma si que invocará al código que se pone del callback
let getUsuarioById2 = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}
getUsuarioById2(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});

getUsuarioById2(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});