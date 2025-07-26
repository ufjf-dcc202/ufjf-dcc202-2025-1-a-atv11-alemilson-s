import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = ''
    let lista = getLista()
    console.log(lista);
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

btnLimpar.addEventListener('click', limparitensDeLista);

function limparitensDeLista(){
    limpaLista();
    atualizarLista();
}

btnAdicionar.addEventListener('click', adicionarItemNaLista);

function adicionarItemNaLista(){
    adicionaNaLista(pEntrada.textContent);
    atualizarLista();
}