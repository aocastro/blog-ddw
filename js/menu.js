$(document).ready(function() {

    $('#conteudo').load('src/noticia/visao/first-noticia.html')

    $('.nav-link').click(function(e) {
        e.preventDefault()
        let link = $(this).attr('href')
        $('#conteudo').empty()
        $('#conteudo').load(link)
    })

})