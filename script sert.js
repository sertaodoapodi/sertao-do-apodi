// Pequenas interações do site

// Fecha o menu móvel ao selecionar um link interno.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        if (menu) menu.classList.remove('ativo');
    });
});

// Conteúdo dos subprojetos.
// Para cadastrar outro, adicione um novo objeto a esta lista
// e crie um cartão com data-subprojeto="1", "2" etc.
const subprojetos = [
    {
        titulo: "Criação do Website e Ferramentas Digitais",
        resumo: "Desenvolver e disponibilizar um website na Internet para dar visibilidade à agricultura familiar do Sertão do Apodi, reunindo informações sobre produção agroecológica, agricultores, comunidades, produtos, práticas sustentáveis, alimentação escolar e iniciativas de desenvolvimento territorial, aproximando agricultores, escolas, organizações sociais, estudantes e gestores públicos.",
        objetivo: "Desenvolver, implementar e manter plataformas digitais que ampliem a visibilidade das ações do projeto, facilitem o acesso às informações, promovam a disseminação do conhecimento produzido e fortaleçam a comunicação e o engajamento com a comunidade.",
        especificos: [
            "Criar e manter um site/blog institucional para divulgação de informações, atividades, resultados e conteúdos relacionados ao projeto.",
            "Desenvolver catálogos digitais para organizar e disponibilizar materiais educativos, publicações e demais produtos gerados pelo projeto.",
            "Gerenciar, atualizar e otimizar continuamente os conteúdos das plataformas digitais, garantindo sua relevância, acessibilidade e qualidade.",
            "Divulgar ações, eventos, campanhas e resultados do projeto por meio de estratégias de comunicação digital.",
            "Ampliar o alcance das informações e fortalecer a interação entre o projeto, seus participantes e a comunidade."
        ]
    }
];

const modalSubprojeto = document.getElementById('subprojetoModal');
const painelSubprojeto = modalSubprojeto?.querySelector('.subprojeto-modal-painel');
const botaoFecharSubprojeto = modalSubprojeto?.querySelector('.subprojeto-fechar');
let elementoAnteriorSubprojeto = null;

function abrirSubprojeto(indice) {
    const projeto = subprojetos[indice];
    if (!projeto || !modalSubprojeto) return;

    document.getElementById('subprojetoModalTitulo').textContent = projeto.titulo;
    document.getElementById('subprojetoModalResumo').textContent = projeto.resumo;
    document.getElementById('subprojetoModalObjetivo').textContent = projeto.objetivo;

    const lista = document.getElementById('subprojetoModalEspecificos');
    lista.replaceChildren();

    projeto.especificos.forEach(texto => {
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
    });

    elementoAnteriorSubprojeto = document.activeElement;
    modalSubprojeto.classList.add('aberto');
    modalSubprojeto.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    painelSubprojeto?.focus();
}

function fecharSubprojeto() {
    if (!modalSubprojeto) return;

    modalSubprojeto.classList.remove('aberto');
    modalSubprojeto.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (elementoAnteriorSubprojeto && typeof elementoAnteriorSubprojeto.focus === 'function') {
        elementoAnteriorSubprojeto.focus();
    }
}

// Delegação de eventos: permite adicionar novos cartões sem alterar esta função.
document.addEventListener('click', event => {
    const botao = event.target.closest('[data-subprojeto]');
    if (botao) {
        abrirSubprojeto(Number(botao.dataset.subprojeto));
    }
});

botaoFecharSubprojeto?.addEventListener('click', fecharSubprojeto);

modalSubprojeto?.addEventListener('click', event => {
    if (event.target === modalSubprojeto) fecharSubprojeto();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalSubprojeto?.classList.contains('aberto')) {
        fecharSubprojeto();
    }
});
