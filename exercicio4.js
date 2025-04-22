let preco = 89.90;

let quantidade = 3;

let valorTotal = preco * quantidade;

let desconto = valorTotal * 0.10;

let valorFinal = valorTotal - desconto;

console.log("Valor total sem desconto: R$ " + valorTotal.toFixed(2).toLocaleString('pt-BR'));
console.log("Desconto de 10%: R$ " + desconto.toFixed(2).toLocaleString('pt-BR'));
console.log("Valor final com desconto: " + valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));