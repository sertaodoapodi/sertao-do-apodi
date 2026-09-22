// Pequenas interações do site

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', () => {

        const menu = document.querySelector('.menu');

        if (menu) {
            menu.classList.remove('ativo');
        }

    });

});