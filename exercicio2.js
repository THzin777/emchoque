const nomes = ["Rafael", "filipy", "joana"];
const nota1 = [10, 7, 4];
const nota2 = [5, 8, 7];

for (let i = 0; i < 3; i++) {
  let media = (nota1[i] + nota2[i]) / 2;
  let resultado = media >= 7 ? "aprovado" : "reprovado";
  console.log(`O aluno ${nomes[i]} foi ${resultado} com a nota ${media}`);
}
