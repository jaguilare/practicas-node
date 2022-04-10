setTimeout( () => {
    console.log('hola mundo');
}, 1000 );

const getUsuarioByID = (id, callback) =>{
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(usuario);
    }, 1500);

}

getUsuarioByID(10, (usuario) => {
    console.log(`hola usuario ${usuario.nombre.toUpperCase()}`);
    console.log(usuario);
});
