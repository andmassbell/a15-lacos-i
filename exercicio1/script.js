let coxinha;
let conta = 0;

while (coxinha !== "N") {
  coxinha = prompt("Você deseja comer mais coxinhas?").toUpperCase();
  if (coxinha === "S") {
    conta = conta + 2.5;
    console.log(conta);
  }
}
console.log("O total ficou em R$", conta);
