const producto = 'Monitor 20 pulgadas';

// .replace se utiliza para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice se utiliza para cortar

console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
console.log(producto.slice(2,1));//error

// Alternativa a slice
console.log(producto.substring(0.10));
console.log(producto.substring(2,1)); // este es como mas inteligente y dice bueno está pasando un número mayor al inicio 

  const usuario = "Juan";
  //console.log(const usuario: "Juan");
  console.log(usuario.charAt(0));


