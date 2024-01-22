document.addEventListener('DOMContentLoaded', function () {
    const linhaDoTempo = document.querySelector('.para-quem');
    const progresso = document.querySelector('.progresso');
    const startOffset = 300; // Ajuste conforme necessário
    const fatorVelocidade = 5; // Ajuste conforme necessário

    function atualizarProgresso() {
        const alturaDaPagina = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;

        // Verifica se a posição de rolagem ultrapassou o início da linha + o offset
        if (scrollTop > linhaDoTempo.offsetTop - window.innerHeight + startOffset) {
            const progressoPercentual = ((scrollTop - (linhaDoTempo.offsetTop - window.innerHeight + startOffset)) / alturaDaPagina) * 100 * fatorVelocidade;
            progresso.style.height = `${progressoPercentual}%`;
        }
    }

    window.addEventListener('scroll', atualizarProgresso);

    // Atualiza o progresso ao carregar a página
    window.addEventListener('load', atualizarProgresso);
});