document.addEventListener('DOMContentLoaded', function () {
    var linkCompras = document.getElementsByClassName('linkCompra');

    for (var i = 0; i < linkCompras.length; i++) {
        linkCompras[i].addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtém a posição da seção .precos
            var precosSection = document.getElementById('precosSection');
            var precosSectionPosition = precosSection.offsetTop;

            // Rola a página para a posição da seção .precos
            window.scrollTo({
                top: precosSectionPosition,
                behavior: 'smooth' // Adiciona um efeito de rolagem suave
            });
        });
    }
});