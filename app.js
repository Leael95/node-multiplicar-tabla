const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);

// console.log('base: yargs', argv.base);

// option ('l)
// listar
// boolean
// default: false

crearArchivoTabla(argv.base, argv.hasta, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));