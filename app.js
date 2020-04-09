/*Se puede hacer el require de esta forma*/
/*const multiplicar = require('./Multiplicar/multiplicar')*/

/* o bien de esta forma para ingresar directamente a la funcion sin anteponer multilicar.
   de esta forma:
*/

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar')
        listarTabla(argv.base, argv.limite)
            .then(console.log('tabla listada correctemente'.gray))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear')
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => console.log(`Archivo creado:`, colors.green(`${mensaje}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido')

}