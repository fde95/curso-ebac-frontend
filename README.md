<h1 align="center">
  <p align="center">Formulário - Validação de valor B > A</p>
 <img src="https://media.giphy.com/media/3orif7xiJDYpBDT0nm/giphy.gif" alt="Os Simpsons Formulário">
</h1>
<div style="display: inline_block"><br>
  <div align="center">
  <img align="center" alt="fde95-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="fde95-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="fde95-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

<h3> Sobre o Projeto </h3>
<p>No sétimo módulo do curso de Engenheiro Front End oferecido pela EBAC, o foco foi a vinculação de um formulário criado em HTML com a confirmação de valores pelo JavaScript. Durante o módulo, foram abordados conceitos como  DOM (Document Object Model) e a integração do JavaScript com o HTML. 
O exercício proposto é de criar um formulário simples com a entrada de dois valores (valor A e valor B) e um botão de submit. Com o JavaScript, deve ocorrer a validação dos valores, positiva caso o valor de B seja maior que A e negativa caso o valor de A seja maior que B.
Como desafio pessoal, criei além da validação proposta, uma mensagem de erro caso os valores sejam identicos e a personalização da página em CSS.
O exercício permitiu consolidar os conhecimentos de HTML e CSS adquiridos nas aulas e desenvolver habilidades em JavaScript.</p>


<h3>Pré Visualização</h3>

<img width="600" src="https://user-images.githubusercontent.com/123211425/231483184-fdaa206e-493b-4cfc-a05b-8ec022ef93a1.png">

<h4>Mensagem de Erro por valor A > B</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/231486657-c20c5043-155e-4d67-a436-9a7f31363d11.png">

<h4>Mensagem de Erro por valor A === B</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/231486853-db604e94-e21a-47be-889d-16f79be73e6a.png">

<h4>Mensagem de Alerta B > A</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/231487054-2e308177-da62-46d6-8ea7-7ef891c05bca.png">


<br></br>

<h3>Contatos</h3>
<div style="display: inline_block">
 <a href="https://instagram.com/fde.95" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 <a href = "mailto:fdespinoza95@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/fde95" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>

<br></br>

<h3>Código Completo</h3>

<h4>HTML</h4>

```xml
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;700&display=swap" rel="stylesheet">
    <title>Validação B > A</title>
</head>
<body>
    <div class="container">
        <h1>Formulário de Validação</h1>
        <h2>B > A</h2>
                <form id="validacaoValorMaior">
            <label>
            Insira o primeiro valor referente a "A"
            <input type="number" id="valorA" required placeholder="Insira um número inteiro" />
        </label>
        <label>
            Insira o segundo valor referente a "B"
            <input type="number" id="valorB" required placeholder="Insira um número inteiro" />
        </label>
            <button type="submit" id="botaoExecutar">Executar</button>
            <span id="alertMessege"></span>
        </form>
    <script src="./main.js">
    </script>
</body>
</html>
```
<h4>CSS</h4>

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: black;
    color: #fff;
    font-family: 'Jost', sans-serif;
}

h1, h2{
    text-align: center;
}

h2{
    font-weight: 300;
}

body {
}

.container {
    margin: 80px auto;
    max-width: 640px;
    width: 100%;
}

form {
    margin-top: 40px;
}

input,button {
    display: block;
    padding: 8px;
    margin-bottom: 8px;
    width: 100%;
    resize: none;
}

button {
    background-color:greenyellow;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
    color:black;
    font-weight: bold;
    font-size: 18px;
    font-style: italic;
    cursor: pointer;
}

span{
    text-align: center;
}

button:hover {
    background-color: rgb(105, 156, 28);
}

```

<h4>JavaScript</h4>

```js
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

```
