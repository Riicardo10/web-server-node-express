const express = require( 'express' );
const app = express();
const PORT = 3000;

app.use( express.static( __dirname + '/public' ) );

app
    .get( '/inicio', (req, res) => {
        res.send( 'INICIO:   /inicio' );
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