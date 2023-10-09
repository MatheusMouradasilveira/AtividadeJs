
let peso = parseFloat(prompt("Qual o seu peso em quilogramas?"));
let altura = parseFloat(prompt("Qual a sua altura em metros? (Exemplo: 1.70)"));


let imc = peso / (altura * altura);


let mensagem = "";

if (imc < 18.5) {
    mensagem = "Abaixo do peso";
} else if (imc < 24.9) {
    mensagem = "Peso saudável";
} else if (imc < 29.9) {
    mensagem = "Sobrepeso";
} else if (imc < 34.9) {
    mensagem = "Obesidade grau I";
} else if (imc < 39.9) {
    mensagem = "Obesidade grau II";
} else {
    mensagem = "Obesidade grau III (Obesidade mórbida)";
}

alert("Seu IMC é " + imc.toFixed(2) + " - " + mensagem);
