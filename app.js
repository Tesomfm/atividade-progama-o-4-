function adicionarProduto(nome, preco){
    const lista= document.getElementById("lista-produtos");
    const itemLi = document.createElement("li");
    itemLi.textContent= `${nome}- R$ ${preco}`;
    lista.appendChild(itemLi);
}
adicionarProduto("camisa", 99.90);