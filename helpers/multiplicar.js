const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base,hasta,listar) => {
    try {
        let salida = '';

        for(i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${i * base}\n`;
        }
    
        if(listar == true) {
            console.log('==================================='.green);
            console.log(`         Tabla del ${base}`.bold);
            console.log('==================================='.green);
            console.log(salida.bold.red);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `Tabla del ${base}`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
}