<h1 align="center">
  <p align="center">Lista de Tarefas - do it</p>
 <img src="https://media.giphy.com/media/13jbiQpZYKUvFS/giphy.gif" alt="boneco fazendo lista de tarefas">
</h1>
<div style="display: inline_block"><br>
  <div align="center">
  <img align="center" alt="fde95-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="fde95-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="fde95-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

<h3> Sobre o Projeto </h3>
No 9º modulo do curso de Engenheiro Front-End oferecido pela EBAC, tivemos o primeiro contato com o jQuery uma biblioteca que contém funções da linguagem JavaScript que interage com páginas em HTML. E como desafio de conclusão do módulo, tivemos que elaborar uma lista de tarefas utilizando o jQuery para para manipular os elementos e controlar os
eventos. 
<br>A tarefa era criar uma aplicação de lista de tarefas. Nesta aplicação deveria haver um formulário com um campo para adicionar o nome da tarefa e um botão para cadastrar a tarefa.
<br>Ao clicar nos itens da lista adicione um efeito que aplique uma linha em cima do texto (text-decoration: line-through).
<br>Como desafio pessoal, decidi além de criar um layout mais apresentável, utilizar mais dois botões sendo eles: "Check" para executar a ação do text-decoration, ter uma animação de expansão de escala além de mudar sua cor para verde no hover; "Trash" para excluir a tarefa com efeito fadeOut, ter uma animação de expansão de escala além de mudar sua cor para vermelho no hover. O background se movimenta junto com a lista propositalmente, para que sempre que olhar no que seria a tela principal, saber a quantidade de tarefas que tem para fazer, de acordo com o preenchimento do background. Também adicionei uma imagem à aba do navegador com a imagem do que seria o logo da página.
<br>Confira abaixo a pré-visualização da tela.


<br></br>
<h3>Pré-visualização</h3>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232872308-9cfc0466-10f5-4e73-9e83-2b32674adc64.png">

<h4>Hover - Mudança de cor do "Check"</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232873158-0fa6a2fd-2055-4182-815c-a506fbc05b5f.png">

<h4>Check -  Tarefa concluida</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232873997-fa215fb4-cca8-4987-8b39-e82728ce00e3.png">

<h4>Hover - Mudança de cor do "Trash"</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232874285-80d60987-c674-4ea2-b1dc-66a221d0c458.png">


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
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"><!--Importando Favicon-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
    <link rel="stylesheet" href="./main.css">
    <title>doit</title>
</head>
<body>
    <div class="container">
        <header>
            <h1>do it</h1>
        </header>
        <div class="task-input">
            <input id="input" type="text" placeholder="Pres. Enter para adicionar nova tarefa" title="Escreva sua tarefa e pressione Enter para adicioná-la"/>
        </div>
        <div class="space"></div>
        <ul class="task-box">
        </ul>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="./main.js"></script>
</body>
<footer>&copy; Criado e Desenvolvido por <b><a href="https://linktr.ee/fde95" target="_blank">Felipe Espinoza</a></b> - 2023 </footer>
</html>
```

<h4>CSS</h4>

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
}

body{
    height: 100%;
    background: linear-gradient(45deg, #08F 50%, rgb(25, 116, 196) 50%);
}

.container{
    max-width: 405px;
    margin: 135px auto;
    background-color: #ADF;
    border-radius: 7px;
    padding: 28px 0;
    box-shadow: 30px 30px 30px rgb(0, 0, 0,0.30);
}

h1{
    text-align: center;
    color: #08F;
    font-size: 80px;
}

.task-input{
    height: 52px;
    padding: 0 25px;
    position: relative;
}

.task-input input{
    height: 100%;
    width: 100%;
    border-radius: 7px;
    padding: 0 8px;
    font-size: 18px;
    border: 2px solid #bfbfbf;
    outline: none;
}

.task-input input::placeholder{
    color: #bfbfbf;
}

.space{
    margin-top: 18px;
    border-bottom: 8px solid rgba(99, 174, 240, 0.508);
}

li{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul{
    margin: 20px 25px;
}

ul li{
    list-style: none;
    font-size: 17px;
    margin-bottom: 18px;
    padding-bottom: 16px ;
    border-bottom: 2px solid rgba(99, 174, 240, 0.508);
}

.check:hover{
    color: green;
    cursor: pointer;
    scale: 1.4;
}

ul .checked{
    font-weight: 400;
    text-decoration: line-through;
    color: #999;
}

.trash:hover{
    cursor: pointer;
    scale: 1.2;
    color: red;
}

.check{
    scale: 1.2;
}

footer{
    text-align: center;
    margin-top: 300px;
    margin-bottom: 15px;
}

footer a{
    text-decoration: none;
    color: black;
}
footer a:hover{
    color: rgb(52, 52, 52);
}
```


<h4>JavaScript</h4>

```js
$(document).ready(function(){
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li><div class="check"><i class="uil uil-check"></i></div>'+input+'<div class="trash"><i class="uil uil-trash-alt"></i></div></li>');
        $(this).val('');
    });

    $('ul').on('click', ".trash",function(){
        $(this).parent('li').fadeOut(600);
    });

    $('ul').on('click', ".check",function(){
        $(this).parent('li').toggleClass('checked');
    });

});

```
