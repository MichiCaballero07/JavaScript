//Solamente puede tener dos valores o True o False - esta bien o mal. colocarlo en un string no asigna un valor similar

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";


//console.log(boolean1);
//console.log(boolean2);

//console.log(typeof boolean1);

//console.log(boolean1 == boolean3);

// Y mucho menos si es extricto

console.log(boolean1 === boolean3);

const boolean4 = new Boolean(true); //estos tipos de constructores como new crean objetos no crean como tal el valor primitivo
console.log(typeof boolean4);

