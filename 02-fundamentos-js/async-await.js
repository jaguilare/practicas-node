const empleados = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Luis'
    },
    {
        id: 3,
        nombre: 'Vane'
    },
];

const salarios = [
    {
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 5500
    }
];

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {

        const empleado = empleados.find( (e) => e.id === id )?.nombre;

        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${id}` )
    } );
};

const getSalario = (id) => {

    return new Promise( (resolve, reject) => {

        const salario = salarios.find( (s) => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`Salario con id ${id} no existe`)        
    } );
};



const getInfoUsuario = async ( id ) => {    
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario de ${empleado} es de $${salario}`;
    }catch( err ){
        throw err;
    }
};

const id = 2;
getInfoUsuario( id )
    .then( msg => console.log('Ok', msg) )
    .catch( err => console.log('Error', err) );