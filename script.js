const lista = document.body.firstElementChild;
const item2 = document.body.children[0].children[1];

console.log(lista);
console.log(item2);

item2.setAttribute("onclick", "mudaClasse()");

function mudaClasse() {
    lista.setAttribute("class", "listaSelecionada");
    console.log(lista);
}

