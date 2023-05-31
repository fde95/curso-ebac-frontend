<h1 align="center">
 <p>Módulo 24 - Orientação a Objetos com JavaScript</p>
 <img width="500" src="https://media.giphy.com/media/rr7AXwx8VHVdhtP4jI/giphy.gif" alt="Season 3 Nbc GIF By The Office">
</h1>
<div style="display: inline_block">
  <div align="center">
   <h3>Tecnologia utilizada</h3>
  <img align="center" alt="fde95-JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>
<br>
<br>

   <p>Este repositório corresponde ao módulo 24 do curso de Engenheiro Front End da EBAC, no qual foi abordado o tema de Orientação a Objetos com JavaScript. Durante esse módulo, exploramos os conceitos fundamentais da orientação a objetos e sua aplicação prática no desenvolvimento de aplicações web.</p>

  <h2>Orientação a Objetos com JavaScript</h2>
  
  <p>A Orientação a Objetos é um paradigma de programação que permite organizar e estruturar o código de forma mais modular e reutilizável. Com JavaScript, podemos aplicar os conceitos da orientação a objetos para criar objetos, definir suas propriedades e métodos, e estabelecer relações entre eles.</p>
  <p>A importância da Orientação a Objetos com JavaScript reside em sua capacidade de tornar o código mais legível, modular, e fácil de dar manutenção. Com a orientação a objetos, podemos criar objetos com características e comportamentos específicos, encapsulando a lógica relacionada a esses objetos em classes e métodos.</p>
  <h2>Principais Aplicações</h2>
  <p>A Orientação a Objetos com JavaScript é amplamente utilizada no desenvolvimento web devido às suas vantagens e benefícios. Alguns dos principais casos de uso e aplicações incluem:</p>
  <ol>
    <li><strong>Organização e Estruturação do Código:</strong> A orientação a objetos permite dividir o código em classes e objetos, o que facilita a organização e estruturação do projeto. Isso torna o código mais modular e reutilizável, promovendo uma melhor manutenção e escalabilidade da aplicação.</li>
    <li><strong>Reutilização de Código:</strong> Com a orientação a objetos, podemos criar classes que representam objetos comuns e reutilizá-las em diferentes partes do projeto. Isso evita a duplicação de código e promove a eficiência no desenvolvimento.</li>
    <li><strong>Herança e Polimorfismo:</strong> Através da herança, é possível criar classes que herdam propriedades e métodos de outras classes, permitindo uma hierarquia de objetos. Além disso, o polimorfismo possibilita o uso de objetos de diferentes classes de forma transparente, melhorando a flexibilidade e a extensibilidade do código.</li>
    <li><strong>Abstração e Encapsulamento:</strong> A orientação a objetos nos permite abstrair a complexidade do sistema, criando classes e objetos que representam entidades do mundo real de forma simplificada. O encapsulamento permite esconder detalhes internos de implementação e fornecer uma interface clara e consistente para interagir com os objetos.</li>
    <li><strong>Modularidade e Manutenção:</strong> A orientação a objetos facilita a divisão do código em módulos independentes, tornando mais fácil identificar e corrigir problemas. Alterações em um objeto específico não afetam outros objetos, o que torna a manutenção mais ágil e menos propensa a erros.</li>
  </ol>
  <p>Em resumo, a Orientação a Objetos com JavaScript traz uma série de vantagens para o desenvolvimento web, permitindo uma organização mais eficiente do código, reutilização de código, hierarquia de objetos, abstração de complexidade e facilitando a manutenção e escalabilidade das aplicações. É uma poderosa ferramenta que amplia as possibilidades e a qualidade do desenvolvimento em JavaScript.</p>

   <h2>Autor</h2>

   <p>Esta atividade foi realizado por <a href="https://linktr.ee/fde95" target="_blank"><b>Felipe Espinoza</b></a> e desenvolvido como parte do curso de Engenheiro Front-End da EBAC.</p>
   <p>Agradeço por visitar o repositório do exercício de Conclusão do Módulo 24 - Orientação a Objetos com JavaScript! 
    <br>Fique à vontade para entrar em contato caso tenha alguma dúvida ou sugestão.</p>

  
 <h2>
    Pré-visualização
 </h2>
  
  ```js
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
  ```

<br>
<br>

<h2>Contatos</h2>
<div style="display: inline_block">
 <a href="https://instagram.com/fde.95" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 <a href = "mailto:fdespinoza95@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/fde95" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
