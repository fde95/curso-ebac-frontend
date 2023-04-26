$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#identidade').mask('000.000.000-00');
    $('#postalCode').mask('00000 - 000');

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            identidade: {
                required: true
            },
            address: {
                required: true
            },
            houseNumber: {
                required: true
            },
            postalCode: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, preencha o seu nome completo',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu número de contato',
            identidade: 'Por favor, insira o número do seu CPF',
            address: 'Por favor, insira o seu endereço',
            houseNumber: 'Por favor, insira o número da sua residência',
            postalCode: 'Por favor, insira o seu CEP',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Você não preencheu ${camposIncorretos} campo(s). Por favor, preencha todo o formulário!`)
            }
        }
        
    });

});