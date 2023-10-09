
const preçoProduto = Number(prompt("Qual o preço do produto em reais?"));
const descontoProduto = Number(prompt("Qual o desconto para o produto em porcentagem?"));


const desconto = preçoProduto * (1 - descontoProduto / 100);


alert(`O preço do produto com desconto fica: R$ ${desconto.toFixed(2)}`);
