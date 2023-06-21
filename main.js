$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#butao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDafault();
        const endercoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${endercoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${endercoDaNovaImagem}" target="_blanck" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                    </a>
            </div>
        `).appendTo(novoItem)
    })
})
