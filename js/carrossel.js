// ===== BLOCO CARROSSEL - FUNÇÕES DO CARROSSEL =====

let currentSlide = 0;
let slideInterval = null;
const TOTAL_SLIDES = 5;

const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselDots = document.getElementById('carouselDots');
const carouselWrapper = document.querySelector('.carousel-wrapper');

// Mapeamento de temas para categorias
// ===== BLOCO CARROSSEL - MAPEAMENTO DE TEMAS =====
// 💡 IMPORTANTE: As chaves aqui (antes dos dois pontos) devem ser EXATAMENTE iguais ao "data-tema" do seu HTML.
const TEMA_CATEGORIAS = {
  'Loja': ['todos'], // Ao clicar em "Loja", mostra todos os produtos
  'Infantil': ['infantil'], // Mostra a categoria "infantil"
  'Cliente Consignado': ['consignado'], // Mostra a categoria "consignado"
  'Lembrancinhas': ['chaveiros', 'acessorios'], // Mostra chaveiros e acessórios (exemplo)
  'Natal': ['natal'] // Mostra a categoria "natal"
};

function criarDots() {
  if (!carouselDots) return;
  
  carouselDots.innerHTML = '';
  for (let i = 0; i < TOTAL_SLIDES; i++) {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dot.addEventListener('click', () => irParaSlide(i));
    carouselDots.appendChild(dot);
  }
}

function irParaSlide(index) {
  if (!carouselTrack) return;
  
  currentSlide = index;
  const offset = -index * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;
  
  if (carouselDots) {
    carouselDots.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
}

function proximoSlide() {
  const next = (currentSlide + 1) % TOTAL_SLIDES;
  irParaSlide(next);
}

function slideAnterior() {
  const prev = (currentSlide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
  irParaSlide(prev);
}

function iniciarCarrosselAuto() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(proximoSlide, CONFIG.CARROSSEL_INTERVALO || 5000);
}

function pararCarrosselAuto() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}

// Função para redirecionar para o tema
function redirecionarTema(tema) {
  const categorias = TEMA_CATEGORIAS[tema] || [];
  if (categorias.length > 0) {
    const link = document.querySelector(`.category-link[data-category="${categorias[0]}"]`);
    if (link) {
      link.click();
    }
  }
  // Fecha o sidebar em mobile
  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth <= 992) {
    sidebar.classList.remove('open');
  }
}

// ===== BLOCO CARROSSEL - EVENTOS =====

function configurarEventosCarrossel() {
  if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
      slideAnterior();
      pararCarrosselAuto();
      iniciarCarrosselAuto();
    });
  }

  if (carouselNext) {
    carouselNext.addEventListener('click', () => {
      proximoSlide();
      pararCarrosselAuto();
      iniciarCarrosselAuto();
    });
  }

  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', pararCarrosselAuto);
    carouselWrapper.addEventListener('mouseleave', iniciarCarrosselAuto);
  }

  // Clique no card inteiro (imagem) redireciona para o tema
  document.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('click', function() {
      const tema = this.dataset.tema;
      if (tema) {
        redirecionarTema(tema);
      }
    });
  });
}

// ===== BLOCO CARROSSEL - INICIALIZAÇÃO =====

function inicializarCarrossel() {
  criarDots();
  irParaSlide(0);
  configurarEventosCarrossel();
  iniciarCarrosselAuto();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarCarrossel);
} else {
  inicializarCarrossel();
}

console.log('🎠 Carrossel inicializado');