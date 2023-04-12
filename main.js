console.log ("JavaScript Carregado com Sucesso"); //confirmação de carregamento JS

const form = document.querySelector('#validacaoValorMaior');
const mensagemValorIgual = document.getElementById('valorIgual');
const mensagemValorMaior = document.getElementById('mensagemValorAMaior');
const mensagemValorCorreto = document.getElementById('valorCorreto');

form.onsubmit = evento => {
    //Receber o valor do campo A e B
    let valorA = document.querySelector('#valorA').value;
    let valorB = document.querySelector('#valorB').value;

    //Verificação de valor maior
    if (valorA > valorB) {
        evento.preventDefault ();
        mensagemValorMaior.innerHTML = "O valor de A é maior que B. Tente novamente";
        mensagemValorMaior.style.display = 'block';
    
    //Validação de recebimento de valores A e B
    console.log ("O valor",valorA,"referente a A é maior que o valor",valorB,"referente a B. Tente novamente!");
        return;
    }
    else if (valorB === valorA) {
        evento.preventDefault ();
        mensagemValorIgual.innerHTML = "O valor de A e B são identicos, insira valores diferentes para A e B";
        mensagemValorIgual.style.display = 'block';
    
    //Validação de recebimento de valores A e B
    console.log ("O valor",valorA,"referente a A e o valor",valorB,"referente a B são identicos. Insira valores diferentes entre A e B!");
        return;
    }
    else {
        evento.preventDefault ();
        mensagemValorCorreto.innerHTML = "Boa!! O valor de B é maior que A.";
        mensagemValorCorreto.style.display = 'block';

        //Validação de recebimento de valores A e B
        console.log ("Parabéns! O valor de",valorB,"referente a B é maior que o valor",valorA,"referente a A.");
        return;
    }


}