console.log ("JavaScript Carregado com Sucesso"); //confirmação de carregamento JS

const form = document.querySelector('#validacaoValorMaior');

form.onsubmit = evento => {
    //Receber o valor do campo A e B
    let valorA = document.querySelector('#valorA').value;
    let valorB = document.querySelector('#valorB').value;

    //Verificação de valor maior
    if (valorA > valorB) {
        evento.preventDefault ();
        document.getElementById('alertMessege').innerHTML = "<h3>O valor de A é maior que B.<p>Tente Novamente!</p>";
    
    //Validação de recebimento de valores A e B
    console.log ("O valor",valorA,"referente a A é maior que o valor",valorB,"referente a B. Tente novamente!");
        return;
    }
    else if (valorB === valorA) {
        evento.preventDefault ();
        document.getElementById('alertMessege').innerHTML = "<h3>Os valores A e B são identicos.<p>Insira valores diferentes entre A e B</p>";
    
    //Validação de recebimento de valores A e B
    console.log ("O valor",valorA,"referente a A e o valor",valorB,"referente a B são identicos. Insira valores diferentes entre A e B!");
        return;
    }
    else {
        alert("Parabéns, o valor de B é maior que o de A");
        return;
    }


}