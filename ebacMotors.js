function Pessoa (nomeCompleto, idade, sabeDirigir, temHabilitacao, valorEmConta) {
    this.nomeCompleto = nomeCompleto;
    this.idade = idade;
    this.sabeDirigir = sabeDirigir;
    this.temHabilitacao = temHabilitacao;
    this.valorEmConta = valorEmConta;
    this.dizApresent = function(){
        console.log(this.nomeCompleto + " quer comprar um veículo!")
    }
}

function Comprador (nomeCompleto, idade, sabeDirigir, temHabilitacao, valorEmConta, veiculo, marca, modelo, ano, valorDoCarro){
    Pessoa.call(this, nomeCompleto, idade, sabeDirigir, temHabilitacao, valorEmConta);
    this.veiculo = veiculo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valorDoCarro = valorDoCarro;
    this.dizNegocio = function(){
        console.log("E acaba de comprar um " + this.veiculo + " da marca " + this.marca)
    }
}

function Feedback (nomeCompleto, idade, sabeDirigir, temHabilitacao, valorEmConta, veiculo, marca, modelo, ano, valorDoCarro, gostouDoVeiculo){
    Comprador.call(this, nomeCompleto, idade, sabeDirigir, temHabilitacao, valorEmConta, veiculo, marca, modelo, ano, valorDoCarro);
    this.gostouDoVeiculo = gostouDoVeiculo;
    this.dizGostou = function(){
        console.log ("Após algum tempo, " + this.nomeCompleto +" diz que é " + this.gostouDoVeiculo + " a afirmação de ter gostado do veículo")
    }
}

const comprador1 = new Feedback("Felipe Espinoza", 28, true, true, 40000, "Carro", "Honda", "Civic", 2010, 30000, true);
const comprador2 = new Feedback("Beatriz Sousa", 24, true, false, 60000, "Moto", "Ducatti", "Diavel", 2022, 55000, true);
const comprador3 = new Feedback("Juan Espinoza", 50, true, true, 160000, "Caminhão", "Volkswagem", "Constallation", 2022, 160000, false);



comprador1.dizApresent();
comprador1.dizNegocio();
comprador1.dizGostou();

console.log(comprador2);

comprador3.dizApresent();
comprador3.dizNegocio();
comprador3.dizGostou();
console.log(comprador3);





