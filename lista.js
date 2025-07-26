const lista = ['Um', 'Dois', 'Três'];

export function getLista(){
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionaNaLista(text){
    lista.push(text);
} 

export function removeDaLista(position){
    lista.splice(position, 1);
}