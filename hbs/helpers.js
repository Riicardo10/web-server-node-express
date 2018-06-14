const hbs = require( 'hbs' );

hbs.registerHelper( 'getAnio', () => new Date().getFullYear() );

hbs.registerHelper( 'capitalizar', texto => {
    let lista_palabras = texto.split(' ');
    lista_palabras.forEach( (palabra, i) => {
        lista_palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    } );
    return lista_palabras.join(' ');
} );
