//Metodos muy utiles cuaundo estas trabajando con números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;


//onsole.log(typeof numero1); //este nos dice que ese tipo de dato es un string pero tiene la representación de número
console.log(Number.parseInt(numero1));//lo que hace el parseInt es convertirlo de un string a un número entero
console.log(Number.parseFloat(numero2));

console.log(numero3);
console.log(numero4);



//podemos revisar si un número es entero  o no

console.log(Number.isInteger(numero4));