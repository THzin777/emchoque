const valorReal = 10000;
const valorDolar = 5.20;
const valorEuro = 5.70;

const valorEmDolar = valorDolar/valorReal;
const valorEmEuro = valorEuro/valorReal;

console.log(.toLocaleString("en-US", {style: "currency", currency:"USD"})) 
console.log( .toLocaleString("pr-BR", {style: "currency", currency:"EUR"}))


