const nombre = 'Luke';
const apellido = 'Skywalker'

const nombreCompleto = nombre  + ' ' + apellido;
const nombreTemplate = `${nombre} ${apellido}`;

console.log(nombreCompleto);
console.log(nombreTemplate);

console.log(nombreCompleto === nombreTemplate); // === valida su contenido

const html = 
`<h1>hola</h1>
<h1>mundo</h1>`;

console.log(html);