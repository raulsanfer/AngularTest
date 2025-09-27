const {writeFileSync,mkdirSync} = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

if(!process.env.MAPBOX_KEY){
    console.log('No se ha definido la variable de entorno MAPBOX_KEY');
    process.exit(1);
}

const envConfig = `export const environment = {
    mapboxKey: '${process.env.MAPBOX_KEY}'
};
`;
mkdirSync('./src/environments',{recursive:true});
writeFileSync(targetPath,envConfig);
writeFileSync(targetPathDev,envConfig);
console.log(`Archivo de configuración creado en ${targetPath} y ${targetPathDev}`);