const express = require( 'express' );
const app = express();
const PORT = 3000;

app.use( express.static( __dirname + '/public' ) );

// MOTOR DE VISTA
app.set( 'view engine', 'hbs' );

app
    .get( '/', (req, res) => {

       res.render( 'index.hbs', {
           nombre: 'Jose Abdiel', 
           anio: new Date().getFullYear()
        } );
    } )
    .get( '/contacto', (req, res) => {
        res.render( 'contacto.hbs' );
     } )
    .listen( PORT, () => { 
        console.log( 'Servidor escuchando en el puerto: ' + PORT )
    } );