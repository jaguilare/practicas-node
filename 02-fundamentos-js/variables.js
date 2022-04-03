// const. ligetas, contenido no cambia, ambito local
// let. ambito local
// var. no usar, ambito global

// const crea variable inicializada una sola vez 
// su contenido no cambia
// const son mas ligeras 
const nomnreConst = 'Nombre constante';

// NO USAR TIPO VAR
// var crea variable en ambito global
var nombre = 'Capitan America'; 

if(true){
    // let crea variable en ambito local
    let nombre = 'Magneto';
    console.log(nombre);
}

console.log(nombre);