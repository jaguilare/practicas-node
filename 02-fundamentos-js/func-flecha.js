// function sumar (a, b=10) {
//     return a + b;
// }
// console.log(sumar(5));


const sumar = (a, b=10) => {
    return a + b;
}
console.log(sumar(5));

const sumar2 = (a, b=10) => a + b;
console.log(sumar2(5));

const saludar = () => 'hola mundo'
console.log(saludar());