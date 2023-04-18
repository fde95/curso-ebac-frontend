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
