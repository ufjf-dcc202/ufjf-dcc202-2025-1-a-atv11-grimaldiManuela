// lista.js

const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}

export function adicionaItem(item){
    if(item && item.trim() !== ""){
        lista.push(item);
    }
}