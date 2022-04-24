const vetor = [3,25,32,10,21,65];

function ordemCrescente(){
    let vetorEmOrdemCrescente = vetor.sort(function(a,b){
        return a - b;
    });
    console.log(vetorEmOrdemCrescente);
}

function menorValor(){
    let menorDeTodos = vetor.filter(function(valor, indice){
            return valor, indice;
    });
    console.log(menorDeTodos);
}

menorValor();