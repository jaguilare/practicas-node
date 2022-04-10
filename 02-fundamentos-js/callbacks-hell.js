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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;

    if( empleado ){
        callback(null, empleado);
    }else {
        callback(`Empleado con id ${id} no existe`);
    }
};

const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id)?.salario;

    if(salario){
        callback(null, salario);
    }
    else{
        callback(`Salario con id ${id} no existe`);
    }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
    if(err){
        return console.log(`ERROR ${err}`);
    }

    //console.log(empleado);
    getSalario(id, (err, salario) => {
        if(err){
            return console.log(`ERROR ${err}`);
        }
    
        console.log('El empleado', empleado, 'tiene un salario de', salario);
    });
});


