const http = require( 'http' );
const PORT = 3000;

http.createServer( (req, res) => {
    // RESP 1
        /*res.write( 'Hola mundo con nodemon otro mas!!' );
        res.end();*/

    // RESP 2
    res.writeHead( 200, {'Content-Type':'application/json'} );
    let usuario = {
        nombre: 'Ricardo',
        apellido: 'Flores',
        ocupacion: 'ISC',
        url: req.url
    }
    res.write( JSON.stringify( usuario ) );
    res.end();
} ).listen( PORT );

console.log( 'Escuchando en el puerto: ' + PORT );