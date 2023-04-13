const producto = '             Monitor 20 pulgadas        ';


console.log(producto);
console.log(producto.length);

//Eliminar del inicio ...
console.log( producto.trimStart());
//Elimiar al final
console.log( producto.trimEnd());

//Para Eliminar en ambas direcciones 

console.log(producto.trimStart().trimEnd() ); // Este metodo es nuevo se creo para poder individualizar al inicio o al final.

console.log(producto.trim());
 