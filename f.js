
const compras = prompt("Digite os itens da lista de compras separados por vírgula:");
const listaCompras = compras.split(',');

for (let i = 0; i < listaCompras.length; i++) {
    const item = listaCompras[i].trim(); 
    alert(item);
}
