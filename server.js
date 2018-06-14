const express = require( 'express' );
const app = express();
const PORT = 3000;

app
    .get( '/', (req, res) => {
        res.send( 'INICIO:   /' );
    } )
    .get( '/usuario', (req, res) => {
        let usuario = {
            nombre: 'Ricardo',
            apellido: 'Flores',
            ocupacion: 'ISC',
            url: req.url
        }
        res.send( usuario );
    } )
    .listen( PORT, () => { 
        console.log( 'Servidor escuchando en el puerto: ' + PORT )
    } );