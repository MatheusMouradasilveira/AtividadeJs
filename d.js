
const quantidadeProduto = Number(prompt("Quantidade de produtos em estoque:"));
const quantidadeQuerer = Number(prompt("Quantidade desejada de produtos:"));


if (quantidadeProduto >= quantidadeQuerer) {
    alert("Temos produtos suficientes em estoque.");
} else {
    alert("Não temos produtos suficientes em estoque.");
}
