const express = require( 'express' );
const app = express();
const hbs = require( 'hbs' );
require ( './hbs/helpers' );
const PORT = 3000;

app.use( express.static( __dirname + '/public' ) );

hbs.registerPartials( __dirname + '/views/parciales' );
// MOTOR DE VISTA
app.set( 'view engine', 'hbs' );

app
    .get( '/', (req, res) => {
       res.render( 'index.hbs', {
           nombre: 'JoSE AbDIel AbrajAN FLOres'
        } );
    } )
    .get( '/contacto', (req, res) => {
        res.render( 'contacto.hbs', {
            active_contacto: true
        } );
     } )
     .get( '/nosotros', (req, res) => {
        res.render( 'nosotros.hbs', {
            getAnio: 'Anio'
        } );
     } )
    .listen( PORT, () => { 
        console.log( 'Servidor escuchando en el puerto: ' + PORT )
    } );