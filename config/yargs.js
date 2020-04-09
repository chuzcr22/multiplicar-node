/*se puede declarar un objeto con las opciones y hacer el llamado de este objeto en los comandos del yargs 
  como se utiliza abajo en los command*/
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    /*esa const opts es lo mismo que hacer lo que esta aqui debajo*/
    .command('crear', 'crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}