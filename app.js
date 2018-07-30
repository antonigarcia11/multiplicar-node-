const argv = require('./config/yargs').argv;
const colors = require('colors');



//require
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}



























// const fs = require('express');
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log('Limite', argv.limite);
//console.log(multiplicar);
/*let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i}\n`;
}
fs.writeFile(`tablas/table-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archvio tabla-${ base }.txt ha sido creado`);
});*/
//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//.catch(e => console.log(e));