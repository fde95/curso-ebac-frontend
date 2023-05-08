<h1 align="center">
  <p align="center">Formulário com Bootstrap</p>
  <img src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif" alt="gif art"></a>
</h1>
<div style="display: inline_block"><br>
  <div align="center">
  <img align="center" alt="fde95-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="fde95-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="fde95-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="jQuery" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg">
</div>

<h3> Sobre o Projeto </h3>
<p>Recentemente concluí o módulo 12 do curso de Engenheiro Front-End da EBAC, e gostaria de compartilhar um pouco sobre a minha experiência.
Neste módulo, tivemos nosso primeiro contato com o Bootstrap, e eu pude ver de perto a facilidade e agilidade que essa biblioteca proporciona. O Bootstrap é uma das bibliotecas mais populares e utilizadas para o desenvolvimento de interfaces responsivas para a web, com diversas funcionalidades e componentes pré-estilizados, tornando o processo de criação de interfaces muito mais rápido e eficiente.
Além disso, o Bootstrap é altamente customizável, permitindo que você crie uma interface com o estilo desejado e de acordo com a identidade visual do seu projeto. Sua documentação é muito completa e acessível, o que torna ainda mais fácil o aprendizado.
Como exercício de conclusão de módulo, tivemos que criar um formulário de cadastro utilizando as classes Bootstrap nos elementos do formulário, como nome, e-mail, telefone e botão de envio. Foi uma atividade bastante interessante, pois pude aplicar os conhecimentos aprendidos durante o módulo e ainda praticar a criação de formulários responsivos e estilizados.
Em resumo, o módulo 12 foi uma ótima oportunidade para conhecer e explorar o Bootstrap, uma biblioteca muito útil e popular para o desenvolvimento de interfaces web. Aprendi muito com as atividades e projetos realizados, e estou empolgado para continuar a explorar suas funcionalidades e possibilidades em projetos futuros.</p>
<br>
<h3>Pré-visualização</h3>
<img width="600" src="https://user-images.githubusercontent.com/123211425/236861486-df6312eb-968d-4256-9602-410f2a70f973.png">

<br>
<br>
<br>
<h3>Contatos</h3>
<div style="display: inline_block">
 <a href="https://instagram.com/fde.95" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 <a href = "mailto:fdespinoza95@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/fde95" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
<br>
<br>
<br>
<h3>Código Completo</h3>

<h4>HTML</h4>

```xml
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"> <!--Importando Bootstrap-->
    <title>Formulário Bootstrap</title>
</head>
<body>
    <div class="base">
        <div class="container">
            <h1 class="h2">Formulário de Cadastro</h1>
            <form id="form">
                <label class="form-label" for="nome">Seu nome</label>
                <input class="form-control" type="text" id="nome" autocomplete="off" required>
                <label class="form-label" for="email">Seu E-mail</label>
                <input class="form-control" type="email" id="email" autocomplete="off" required>
                <label class="form-label" for="celular">Celular</label>
                <input class="form-control" type="tel" id="celular" autocomplete="off" required>
                <div class="form-check form-switch">
                    <input type="checkbox" class="form-check-input" id="aceito-termos" required>
                    <label  class="form-check-label"  for="aceito-termos">Li e concordo com os <a href="https://linktr.ee/fde95">Termos e Condições de Uso do Site</a></label>
                </div>
                <button class="btn btn-success" id="cadastrar">Cadastrar</button>
            </form>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./js/jquery.mask.min.js"></script>
    <script src="./js/main.js"></script>
</body>
</html>
```

<h4>CSS</h4>

```css
body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.base{
    max-width: 500px;
    margin: 135px auto;
    padding: 40px;
    background-color: #2a2a2a;
    border-radius: 50px;
    color: #fff;
    box-shadow: 30px 30px 30px rgb(0, 0, 0,0.30);
}

.form-control{
    margin-bottom: 18px;
}

.btn{
    margin-top: 18px;
    width: 100%;
}

```
