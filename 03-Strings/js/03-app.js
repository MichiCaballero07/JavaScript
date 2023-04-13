const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD ';

//console.log(producto.concat(precio));

//console.log(producto.concat('En descuento'));

console.log( producto + "Con un precio de:" + precio);

console.log("El producto " + "tiene un precio de " + precio );
console.log("El producto ", producto, "tiene un precio de ", precio );
//conforme se va haciendo más grande el texto, los signos además son importantes si me hace falta uno me va a marcar un error y no se va a ejecutar el Código

console.log(`El Producto ${producto} tiene un precio de $ ${precio}`);
//la caracteristica principal que tienen estos Templet Strings es que las variables se agregan con esta sintaxis ${}

//se utiliza la comilla inclinada que se encuentra o al lado de la p o en mi caso en la tecla que tiene esta llave }
// está es la que más se utiliza por que es más facil de leer cuando el código es muy extenso


