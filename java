
// ANO AUTOMÁTICO NO RODAPÉ

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent =
        `© ${new Date().getFullYear()} Sertão do Apodi. Todos os direitos reservados.`;
}


// ROLAGEM SUAVE DO MENU

const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach(link => {

    link.addEventListener('click', function(event) {

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// DESTAQUE DO LINK ATIVO

const secoes = document.querySelectorAll('section[id]');

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            const id = entrada.target.getAttribute('id');

            linksMenu.forEach(link => {

                link.classList.remove('ativo');

                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('ativo');
                }

            });

        }

    });

}, {
    threshold: 0.3
});

secoes.forEach(secao => {
    observador.observe(secao);
});
