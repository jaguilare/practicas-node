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
        salario: 2000
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


const id = 3;
let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then( salario => console.log( 'El empleado', nombre, 'tiene un salario de', salario ) )
    .catch( err => console.log(err) );
