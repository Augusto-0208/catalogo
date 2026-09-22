// ===== BLOCO MAIN - INICIALIZAÇÃO PRINCIPAL =====

// Elementos
const grid = document.getElementById('productGrid');
const categoryLinks = document.querySelectorAll('.category-link');
const subcategoryLinks = document.querySelectorAll('.subcategory-link');
const categoryTitle = document.getElementById('categoryTitle');
const productCount = document.getElementById('productCount');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

// ===== BLOCO MAIN - CATEGORIAS ESPECIAIS =====

const CATEGORIAS_ESPECIAIS = {
  'consignado': {
    titulo: 'Produtos Consignados',
    icone: 'fa-handshake',
    tipo: 'consignado'
  },
  'consignado-solicitar': {
    titulo: 'Solicitar Consignado',
    icone: 'fa-paper-plane',
    isForm: true
  },
  'personalizaveis': {
    titulo: 'Produtos Personalizáveis',
    icone: 'fa-paint-brush',
    tipo: 'personalizavel'
  }
};

// ===== BLOCO MAIN - FUNÇÃO AUXILIAR PARA GERAR HTML DO PRODUTO =====

function gerarHtmlProduto(p) {
  let tagHtml = '';
  if (p.tipo === 'consignado') tagHtml = `<span class="tag-consignado"><i class="fas fa-handshake"></i> CONSIGNADO</span>`;
  else if (p.tipo === 'personalizavel') tagHtml = `<span class="tag-personalizavel"><i class="fas fa-paint-brush"></i> PERSONALIZÁVEL</span>`;
  else if (p.tag === 'novo') tagHtml = `<span class="tag-novo"><i class="fas fa-bolt"></i> NOVO</span>`;
  else if (p.tag === 'promo') tagHtml = `<span class="tag-promo"><i class="fas fa-fire"></i> PROMO</span>`;
  else if (p.tag === 'destaque') tagHtml = `<span class="tag-destaque"><i class="fas fa-star"></i> DESTAQUE</span>`;

  // Lógica da Imagem: Se tiver "img", usa a tag <img>. Se não, usa o ícone.
  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" /><i class="fas ${p.icon}" style="display: none;"></i>`
    : `<i class="fas ${p.icon}"></i>`;

  return `
    <div class="product-card" data-category="${p.category}" data-sub="${p.sub || ''}">
      <div class="product-image">${imgHtml}</div>
      ${tagHtml}
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-price">${p.price}</div>
      <button class="btn-whatsapp" data-id="${p.id}" style="border:none;">
        <i class="fab fa-whatsapp"></i> QUERO ESTE
      </button>
    </div>
  `;
}

// ===== BLOCO MAIN - FUNÇÃO PARA RENDERIZAR BANNERS =====

function renderizarBannerEspecial(category) {
  if (category === 'consignado') {
    return `
      <div style="grid-column:1/-1;">
        <div class="consignado-banner">
          <div class="banner-content">
            <h3><i class="fas fa-handshake"></i> Produtos Consignados</h3>
            <p>Produtos disponíveis em regime de consignação para você revender sem precisar investir inicialmente.</p>
            <p style="margin-top:0.5rem; font-size:0.9rem; opacity:0.8;">
              <i class="fas fa-check-circle"></i> Pague apenas quando vender<br>
              <i class="fas fa-check-circle"></i> Sem custo inicial<br>
              <i class="fas fa-check-circle"></i> Entrega rápida
            </p>
          </div>
          <a href="https://wa.me/${CONFIG.TELEFONE}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20consignados%20da%20ASA%20TEC%203D." target="_blank" class="banner-btn">
            <i class="fab fa-whatsapp"></i> Fale Conosco
          </a>
        </div>
      </div>
    `;
  } else if (category === 'consignado-solicitar') {
    return `
      <div style="grid-column:1/-1;">
        <div class="consignado-banner" style="background: linear-gradient(135deg, #6d28d9, #4c1d95);">
          <div class="banner-content">
            <h3><i class="fas fa-paper-plane"></i> Solicitar Consignado</h3>
            <p>Preencha os dados abaixo e nossa equipe entrará em contato para viabilizar o consignado para sua loja.</p>
            <div style="margin-top:1rem; background: rgba(255,255,255,0.1); border-radius:16px; padding:1.5rem;">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; max-width:500px; margin:0 auto;">
                <div>
                  <label style="display:block; font-size:0.8rem; opacity:0.8; margin-bottom:0.3rem;">Nome da Loja</label>
                  <input type="text" id="lojaNome" placeholder="Nome da sua loja" style="width:100%; padding:0.5rem; border-radius:8px; border:none; background:rgba(255,255,255,0.2); color:white;">
                </div>
                <div>
                  <label style="display:block; font-size:0.8rem; opacity:0.8; margin-bottom:0.3rem;">Telefone</label>
                  <input type="text" id="lojaTelefone" placeholder="(00) 00000-0000" style="width:100%; padding:0.5rem; border-radius:8px; border:none; background:rgba(255,255,255,0.2); color:white;">
                </div>
                <div style="grid-column:1/-1;">
                  <label style="display:block; font-size:0.8rem; opacity:0.8; margin-bottom:0.3rem;">Produtos de Interesse</label>
                  <textarea id="lojaProdutos" rows="2" placeholder="Quais produtos você gostaria de ter em consignado?" style="width:100%; padding:0.5rem; border-radius:8px; border:none; background:rgba(255,255,255,0.2); color:white;"></textarea>
                </div>
                <div style="grid-column:1/-1;">
                  <button onclick="window.enviarSolicitacaoConsignado()" style="background:white; color:#4c1d95; border:none; padding:0.6rem 2rem; border-radius:40px; font-weight:700; cursor:pointer; transition:0.3s;">
                    <i class="fas fa-paper-plane"></i> Enviar Solicitação
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (category === 'personalizaveis') {
    return `
      <div style="grid-column:1/-1;">
        <div class="personalizavel-banner">
          <div class="banner-content">
            <h3><i class="fas fa-paint-brush"></i> Produtos Personalizáveis</h3>
            <p>Crie produtos únicos com sua arte, nome, logo ou mensagem personalizada.</p>
            <p style="margin-top:0.5rem; font-size:0.9rem; opacity:0.8;">
              <i class="fas fa-check-circle"></i> Personalize com seu design<br>
              <i class="fas fa-check-circle"></i> Ideal para presentes e brindes<br>
              <i class="fas fa-check-circle"></i> Produção sob demanda
            </p>
          </div>
          <a href="https://wa.me/${CONFIG.TELEFONE}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20produtos%20personalizáveis%20da%20ASA%20TEC%203D." target="_blank" class="banner-btn">
            <i class="fab fa-whatsapp"></i> Fale Conosco
          </a>
        </div>
      </div>
    `;
  }
  return '';
}

// ===== BLOCO MAIN - FUNÇÃO PARA ENVIAR SOLICITAÇÃO =====

function enviarSolicitacaoConsignado() {
  const nome = document.getElementById('lojaNome')?.value || '';
  const telefone = document.getElementById('lojaTelefone')?.value || '';
  const produtos = document.getElementById('lojaProdutos')?.value || '';
  
  if (!nome || !telefone || !produtos) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  const mensagem = `Olá! Gostaria de solicitar produtos em consignado para minha loja:\n\n` +
                   `Nome da Loja: ${nome}\n` +
                   `Telefone: ${telefone}\n` +
                   `Produtos de Interesse: ${produtos}`;
  
  const link = `${CONFIG.WHATSAPP_URL}${CONFIG.TELEFONE}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
}

window.enviarSolicitacaoConsignado = enviarSolicitacaoConsignado;

// ===== BLOCO MAIN - VARIÁVEIS DE ESTADO =====

let currentCategory = 'todos';
let currentSub = null;
let isSearchMode = false;
let searchTerm = '';

// ===== BLOCO MAIN - FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO =====

function renderProducts(category, sub = null) {
  if (!grid) {
    console.error('❌ Grid de produtos não encontrado!');
    return;
  }

  console.log('🔄 Renderizando categoria:', category, 'Sub:', sub);
  
  // Atualiza estado atual
  currentCategory = category;
  currentSub = sub;
  isSearchMode = false;

  // ===== VERIFICA SE É CATEGORIA ESPECIAL =====
  if (CATEGORIAS_ESPECIAIS[category]) {
    const info = CATEGORIAS_ESPECIAIS[category];
    
    if (categoryTitle) {
      categoryTitle.innerHTML = `<i class="fas ${info.icone}"></i> ${info.titulo}`;
    }
    if (productCount) {
      productCount.textContent = '';
    }
    
    if (category === 'consignado-solicitar') {
      grid.innerHTML = renderizarBannerEspecial(category);
      return;
    }
    
    // Para consignado e personalizaveis, filtra produtos pelo tipo
    const filtered = PRODUTOS_ATIVOS.filter(p => p.tipo === info.tipo);
    console.log(`📦 Produtos ${info.tipo} encontrados:`, filtered.length);
    
    let html = renderizarBannerEspecial(category);
    
    if (filtered.length === 0) {
      html += `
        <div style="grid-column:1/-1; text-align:center; padding: 2.5rem 0; color: var(--cor-texto); opacity: 0.6;">
          <i class="fas fa-box-open" style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i>
          Nenhum produto disponível nesta categoria.
        </div>
      `;
      grid.innerHTML = html;
      return;
    }
    
    filtered.forEach(p => {
      html += gerarHtmlProduto(p);
    });
    
    grid.innerHTML = html;
    adicionarEventosProdutos();
    return;
  }

  // ===== CATEGORIAS NORMAIS =====
  let filtered = PRODUTOS_ATIVOS;
  let title = 'Todos os Produtos';
  
  if (category && category !== 'todos') {
    filtered = filtered.filter(p => p.category === category);
    
    const link = document.querySelector(`.category-link[data-category="${category}"]`);
    if (link) {
      title = link.textContent.trim();
    }
    
    if (sub) {
      filtered = filtered.filter(p => p.sub === sub);
      title += ` - ${sub.charAt(0).toUpperCase() + sub.slice(1)}`;
    }
  }

  console.log(`📦 Produtos encontrados para ${category}:`, filtered.length);

  if (categoryTitle) {
    categoryTitle.innerHTML = `<i class="fas fa-th"></i> ${title}`;
  }
  if (productCount) {
    productCount.textContent = `${filtered.length} produtos`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding: 2.5rem 0; color: var(--cor-texto); opacity: 0.6;"><i class="fas fa-box-open" style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i> Nenhum produto nesta categoria.</div>`;
    return;
  }

  let html = '';
  filtered.forEach(p => {
    html += gerarHtmlProduto(p);
  });

  grid.innerHTML = html;
  adicionarEventosProdutos();
}

// ===== BLOCO MAIN - FUNÇÃO PARA ADICIONAR EVENTOS AOS PRODUTOS =====

function adicionarEventosProdutos() {
  document.querySelectorAll('.btn-whatsapp[data-id]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const id = parseInt(this.dataset.id);
      const produto = PRODUTOS_ATIVOS.find(p => p.id === id);
      if (!produto) return;
      
      if (typeof window.gerenciarCliqueQueroEste === 'function') {
        window.gerenciarCliqueQueroEste(produto);
      }
    });
  });
}

// ===== BLOCO MAIN - FUNÇÃO DE PESQUISA (FILTRO NA GRADE) =====

function filtrarPorPesquisa(termo) {
  termo = termo.trim().toLowerCase();
  isSearchMode = true;
  searchTerm = termo;
  
  if (!termo) {
    // Se a pesquisa estiver vazia, volta para a categoria atual
    isSearchMode = false;
    renderProducts(currentCategory, currentSub);
    return;
  }
  
  // Filtra produtos de acordo com a categoria atual
  let produtos = PRODUTOS_ATIVOS;
  
  // Se não estiver em "todos", filtra pela categoria atual
  if (currentCategory && currentCategory !== 'todos') {
    // Verifica se é categoria especial
    if (CATEGORIAS_ESPECIAIS[currentCategory]) {
      const info = CATEGORIAS_ESPECIAIS[currentCategory];
      if (info.tipo) {
        produtos = produtos.filter(p => p.tipo === info.tipo);
      }
    } else {
      produtos = produtos.filter(p => p.category === currentCategory);
      if (currentSub) {
        produtos = produtos.filter(p => p.sub === currentSub);
      }
    }
  }
  
  // Aplica o filtro de pesquisa
  const resultados = produtos.filter(p => {
    return p.name.toLowerCase().includes(termo) ||
           p.desc.toLowerCase().includes(termo) ||
           p.category.toLowerCase().includes(termo) ||
           (p.sub && p.sub.toLowerCase().includes(termo));
  });
  
  // Atualiza título
  if (categoryTitle) {
    const icon = CATEGORIAS_ESPECIAIS[currentCategory]?.icone || 'fa-search';
    categoryTitle.innerHTML = `<i class="fas ${icon}"></i> Resultados para "${termo}"`;
  }
  if (productCount) {
    productCount.textContent = `${resultados.length} produtos encontrados`;
  }
  
  // Renderiza resultados
  if (resultados.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding: 3rem 0; color: var(--cor-texto); opacity: 0.6;">
        <i class="fas fa-search" style="font-size:3rem; display:block; margin-bottom:1rem;"></i>
        <h3 style="margin-bottom:0.5rem;">Nenhum produto encontrado</h3>
        <p>Não encontramos resultados para "<strong>${termo}</strong>"</p>
        <button onclick="limparPesquisa()" style="margin-top:1rem; background:var(--cor-destaque); color:white; border:none; padding:0.5rem 1.5rem; border-radius:40px; cursor:pointer;">
          <i class="fas fa-times"></i> Limpar pesquisa
        </button>
      </div>
    `;
    return;
  }
  
  let html = '';
  resultados.forEach(p => {
    html += gerarHtmlProduto(p);
  });
  
  grid.innerHTML = html;
  adicionarEventosProdutos();
}

// ===== BLOCO MAIN - FUNÇÃO PARA LIMPAR PESQUISA =====

function limparPesquisa() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  isSearchMode = false;
  renderProducts(currentCategory, currentSub);
}

window.limparPesquisa = limparPesquisa;

// ===== BLOCO MAIN - NAVEGAÇÃO =====

categoryLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const category = this.dataset.category;
    
    console.log('🖱️ Categoria clicada:', category);
    
    // Limpa a pesquisa
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = '';
    }
    isSearchMode = false;
    
    categoryLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    
    document.querySelectorAll('.subcategory').forEach(el => {
      el.classList.remove('open');
    });
    
    renderProducts(category);
    
    if (window.innerWidth <= 992) {
      sidebar.classList.remove('open');
    }
  });
});

subcategoryLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const category = this.dataset.category;
    const sub = this.dataset.sub;
    
    console.log('🖱️ Subcategoria clicada:', category, sub);
    
    // Limpa a pesquisa
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = '';
    }
    isSearchMode = false;
    
    categoryLinks.forEach(l => l.classList.remove('active'));
    subcategoryLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    
    const parent = this.closest('.subcategory');
    if (parent) {
      parent.classList.add('open');
      const parentLink = parent.querySelector('.category-link');
      if (parentLink) {
        parentLink.classList.add('active');
      }
    }
    
    renderProducts(category, sub);
    
    if (window.innerWidth <= 992) {
      sidebar.classList.remove('open');
    }
  });
});

document.querySelectorAll('.subcategory > .category-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('open');
  });
});

// ===== BLOCO MAIN - SIDEBAR MOBILE =====

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });
}

document.addEventListener('click', function(e) {
  if (window.innerWidth <= 992) {
    if (sidebar && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
      sidebar.classList.remove('open');
    }
  }
});

// ===== BLOCO MAIN - BARRA DE PESQUISA (APENAS FILTRO NA GRADE) =====

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchClear = document.getElementById('searchClear');
const searchResults = document.getElementById('searchResults');
let searchTimeout = null;

// Remove o dropdown de resultados (não será mais usado)
if (searchResults) {
  searchResults.style.display = 'none';
}

function realizarPesquisa() {
  const termo = searchInput.value.trim();
  if (termo.length > 0) {
    filtrarPorPesquisa(termo);
    searchClear.style.display = 'block';
  } else {
    limparPesquisa();
    searchClear.style.display = 'none';
  }
}

// Evento de input - pesquisa automática com delay
searchInput.addEventListener('input', function() {
  clearTimeout(searchTimeout);
  const termo = this.value;
  
  if (termo.length === 0) {
    limparPesquisa();
    searchClear.style.display = 'none';
    return;
  }
  
  searchTimeout = setTimeout(() => {
    realizarPesquisa();
  }, 500);
});

// Evento de busca ao clicar no botão da lupa
searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  realizarPesquisa();
});

// Evento de busca ao pressionar Enter
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    realizarPesquisa();
  }
});

// Botão limpar
searchClear.addEventListener('click', function() {
  searchInput.value = '';
  limparPesquisa();
  this.style.display = 'none';
  searchInput.focus();
});

// Fecha resultados ao clicar fora (não usado mais, mantido por segurança)
document.addEventListener('click', function(e) {
  const searchContainer = document.querySelector('.search-container');
  if (searchContainer && !searchContainer.contains(e.target)) {
    if (searchResults) {
      searchResults.classList.remove('active');
    }
  }
});

console.log('🔍 Barra de pesquisa inicializada (modo filtro)');

// ===== BLOCO MAIN - INICIALIZAÇÃO =====

function inicializar() {
  console.log('🚀 Inicializando ASA TEC 3D...');
  console.log('📦 Total de produtos disponíveis:', PRODUTOS_ATIVOS.length);
  
  renderProducts('todos');

  if (typeof window.atualizarBadge === 'function') {
    window.atualizarBadge();
  }

  if (typeof window.renderizarCarrinho === 'function') {
    window.renderizarCarrinho();
  }

  const todosLink = document.querySelector('.category-link[data-category="todos"]');
  if (todosLink) {
    todosLink.classList.add('active');
  }

  console.log(`✅ ${CONFIG.NOME_EMPRESA} - Catálogo carregado com sucesso!`);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializar);
} else {
  inicializar();
}