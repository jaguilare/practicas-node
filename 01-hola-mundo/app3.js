console.log('Inicio de programa'); // primero - 1

setTimeout( () => {
    console.log('Primer timeout'); // ultimo
}, 3000);


setTimeout( () => {
    console.log('Segundo timeout'); // segundo
}, 0);

setTimeout(() => {
    console.log('Tercer timeout'); // tercero
},0);

console.log('Fin de programa'); // cuarto - 2