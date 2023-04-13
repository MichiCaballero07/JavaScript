const producto = 'Monitor 20 pulgadas ';

console.log(producto);
//metodo para limitar la cantidad de palabras que va a utilizar el usuario
//conocer la cantidad de letras de la cadena de texto o strings
console.log(producto.length); //.length es de los muy pocos metodos que no utilizan parentesis y eso es por que es una propiedad

//console.log(producto.indexOf('Tablet'));


console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));// me indica si la palabra esta o no esta con un falso o verdadero 

console.log(producto.indexOf('monitor'));// me dice la primera posición donde se encuetra la palabra

