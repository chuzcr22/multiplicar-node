const fs = require('fs');
const colors = require('colors');

let data = '';
/*si ponermos = 10 en el parametro le damos un calor por defecto por aquello que venga vacio*/
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado '${ base}' no es un número para la base`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor ingresado '${ limite}' no es un número para el límite`.red);
            return;
        }
        console.log('=========================='.green);
        console.log(`========TABLA DE ${base}=====`.blue);
        console.log('=========================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`.cyan);
        }
        resolve(true);

    })
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado '${ base}' no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}