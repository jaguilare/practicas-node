const ironman = {
    nombre: 'Tony',
    apellido: 'Stark',
    poder: 'Genio, millonario, filantropo y play boy',
    edad : 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
// const nombre = ironman.nombre;
// const apellido = ironman.apellido;
// const poder = ironman.poder;
// console.log(ironman.getNombre());

const {nombre, apellido, poder, edad = 0} = ironman;

function imprimeHeroe( {nombre, apellido, poder, edad = 0} ){
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(ironman);

const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes [0];
// const h2 = heroes [1];
// const h3 = heroes [2];

// const [h1, h2, h3] = heroes;\
// console.log(h1);
// console.log(h2);
// console.log(h3);

const [ , , h3] = heroes;

console.log(h3);

