const entrada = prompt("Escreva o número que deseja multiplicar")

for (let i = 1; i <= 20; i++) {
    let resultado = entrada * i;
    alert(`${entrada} x ${i} = ${resultado}`);
  }