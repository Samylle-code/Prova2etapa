class Medicamento {
    constructor (nome, valor){
        this.nomeMedicamento = nome;
        this.valorMedicamento = valor;
    }
    apresentarValorMedicamento(idade){
        this.idade = idade;
        let valor = this.valorMedicamento;
        if ( idade >= 60 & idade <=70){
            let valorDesconto =(valor * 20)/ 100
            return (`O valor é ${valor - valorDesconto}`);
        } else if ( idade >= 71 & idade <=80){
            let valorDesconto =(valor * 30)/ 100
            return (`O valor é ${valor - valorDesconto}`);
        } else if ( idade > 80){
            let valorDesconto =(valor * 50)/ 100
            return (`O valor é ${valor - valorDesconto}`);
        }
    }
}

const MedicamentoX = new Medicamento("Dipirona", 65);
console.log(MedicamentoX.apresentarValorMedicamento(87));