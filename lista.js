const lista = ['Um', 'Dois', 'Três'];

export function getLista(){
    return structuredClone(lista);
}

export function limparLista(){
    lista.splice(0);
}