// Função para alternar entre as seções da página
function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Detalhes dos Serviços
const servicosDetalhes = {
    'ar-condicionado': {
        titulo: 'Ar-Condicionado',
        descricao: 'Serviço completo que inclui venda, instalação profissional, locação, manutenção preventiva, limpeza de filtros, consertos em geral e carga de gás para todos os modelos residenciais e comerciais.'
    },
    'eletrodomesticos': {
        titulo: 'Eletrodomésticos',
        descricao: 'Assistência técnica especializada em linha branca e eletrodomésticos em geral. Conserto de máquinas de lavar, geladeiras, micro-ondas e fogões com peças originais e garantia.'
    },
    'consultoria': {
        titulo: 'Consultoria Técnica',
        descricao: 'Avaliação técnica detalhada no local para dimensionamento de ambientes, verificação de infraestrutura elétrica e fornecimento de orçamentos precisos com as melhores opções do mercado.'
    },
    'planos': {
        titulo: 'Planos de Manutenção',
        descricao: 'Planos recorrentes de manutenção preventiva para empresas e residências (PMOC). Garanta ar puro, economia de energia e prolongue a vida útil dos seus equipamentos com descontos anuais.'
    }
};

function showDetail(servicoKey) {
    const servico = servicosDetalhes[servicoKey];
    if (servico) {
        document.getElementById('detalhe-titulo').innerText = servico.titulo;
        document.getElementById('detalhe-descricao').innerText = servico.descricao;
        showSection('detalhe-servico');
    }
}

// Validação em tempo real para permitir apenas números no telefone
function validarTelefone(input) {
    const erroSpan = document.getElementById('erro-telefone');
    const btnEnviar = document.getElementById('btn-enviar');
    
    // Expressão regular que verifica se contém letras ou caracteres não numéricos
    const contemLetrasOuInvalidos = /[^0-9\s\-\(\)\+]/.test(input.value);

    if (contemLetrasOuInvalidos && input.value.trim() !== '') {
        erroSpan.style.display = 'block';
        input.style.borderColor = '#ef4444';
        btnEnviar.disabled = true;
        btnEnviar.style.opacity = '0.6';
        btnEnviar.style.cursor = 'not-allowed';
    } else {
        erroSpan.style.display = 'none';
        input.style.borderColor = '#cbd5e1';
        btnEnviar.disabled = false;
        btnEnviar.style.opacity = '1';
        btnEnviar.style.cursor = 'pointer';
    }
}

// Carrossel Automático e Interativo
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    if (slides.length === 0) return;
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;

    const carouselImages = document.getElementById('carouselImages');
    if (carouselImages) {
        carouselImages.style.transform = `translateX(${-currentSlideIndex * 100}%)`;
    }

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlideIndex);
    });
}

function currentSlide(index) {
    showSlide(index);
}

// Troca automática a cada 4 segundos
setInterval(() => {
    showSlide(currentSlideIndex + 1);
}, 4000);

// Envio do formulário via WhatsApp
function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico-select').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá! Meu nome é *${nome}*.\nTelefone: ${telefone}\nServiço de interesse: *${servico}*\nDetalhes: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);

    const numeroWhatsApp = '5527997669166';
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}

// Efeito de Neve Caindo
function criarNeve() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Posição horizontal aleatória
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    // Tamanho aleatório dos flocos (entre 4px e 10px)
    const tamanho = Math.random() * 6 + 4;
    snowflake.style.width = tamanho + 'px';
    snowflake.style.height = tamanho + 'px';
    
    // Duração da queda aleatória (entre 5s e 10s)
    const duracao = Math.random() * 5 + 5;
    snowflake.style.animationDuration = duracao + 's';
    
    document.body.appendChild(snowflake);

    // Remove o floco após ele cair para não pesar o navegador
    setTimeout(() => {
        snowflake.remove();
    }, duracao * 1000);
}

// Cria um novo floco a cada 150 milissegundos
setInterval(criarNeve, 150);