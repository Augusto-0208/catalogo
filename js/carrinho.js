// ===== BLOCO CARRINHO - FUNÇÕES DO CARRINHO =====

let carrinho = [];
let pendingProduct = null;

// Elementos do DOM
const cartBadge = document.getElementById('cartBadge');
const cartModal = document.getElementById('cartModal');
const modalProductName = document.getElementById('modalProductName');
const modalAddCart = document.getElementById('modalAddCart');
const modalGoWpp = document.getElementById('modalGoWpp');
const modalCancel = document.getElementById('modalCancel');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartPanel = document.getElementById('cartPanel');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const finalizarCartBtn = document.getElementById('finalizarCartBtn');

function atualizarBadge() {
  if (cartBadge) {
    const total = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    cartBadge.textContent = total;
  }
}

function calcularTotal() {
  const total = carrinho.reduce((sum, item) => {
    const valor = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return sum + (valor * item.quantidade);
  }, 0);
  return total;
}

function atualizarTotal() {
  if (cartTotal) {
    const total = calcularTotal();
    cartTotal.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

function abrirModal(produto) {
  if (!cartModal) return;
  pendingProduct = produto;
  modalProductName.innerHTML = `Deseja adicionar <strong>${produto.name}</strong> ao carrinho ou ir direto para o WhatsApp?`;
  cartModal.classList.add('aberto');
}

function fecharModal() {
  if (!cartModal) return;
  cartModal.classList.remove('aberto');
  pendingProduct = null;
}

function adicionarAoCarrinho(produto) {
  const existing = carrinho.find(p => p.id === produto.id);
  if (existing) {
    existing.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
  atualizarBadge();
  renderizarCarrinho();
  fecharModal();
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(p => p.id !== id);
  atualizarBadge();
  renderizarCarrinho();
}

function alterarQuantidade(id, delta) {
  const item = carrinho.find(p => p.id === id);
  if (!item) return;
  
  const novaQtd = item.quantidade + delta;
  if (novaQtd <= 0) {
    removerDoCarrinho(id);
    return;
  }
  item.quantidade = novaQtd;
  atualizarBadge();
  renderizarCarrinho();
}

function limparCarrinho() {
  if (carrinho.length === 0) return;
  if (confirm('Tem certeza que deseja limpar o carrinho?')) {
    carrinho = [];
    atualizarBadge();
    renderizarCarrinho();
    if (cartPanel) {
      cartPanel.classList.remove('aberto');
    }
  }
}

function gerenciarCliqueQueroEste(produto) {
  if (carrinho.length === 0) {
    abrirModal(produto);
  } else {
    adicionarAoCarrinho(produto);
  }
}

function irParaWhatsappComCarrinho() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  
  let mensagem = `Olá! Gostaria de comprar os seguintes produtos da ${CONFIG.NOME_EMPRESA}:\n\n`;
  carrinho.forEach((p, index) => {
    mensagem += `${index + 1}. ${p.name} - ${p.quantidade}x ${p.price}\n`;
  });
  
  const total = calcularTotal();
  mensagem += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;
  
  const link = `${CONFIG.WHATSAPP_URL}${CONFIG.TELEFONE}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
}

function irParaWhatsapp(produto) {
  const mensagem = `Olá! Tenho interesse no produto: ${produto.name} (${produto.desc}) - ${produto.price}. (via ${CONFIG.NOME_EMPRESA})`;
  const link = `${CONFIG.WHATSAPP_URL}${CONFIG.TELEFONE}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
  fecharModal();
}

function renderizarCarrinho() {
  if (!cartItems) return;
  
  if (carrinho.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.</div>`;
    if (cartTotal) cartTotal.textContent = 'Total: R$ 0,00';
    return;
  }

  let html = '';
  carrinho.forEach(p => {
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-name">${p.name}</span>
          <span class="cart-item-price">${p.price}</span>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" data-id="${p.id}" data-delta="-1">-</button>
          <input type="number" class="cart-qty-input" value="${p.quantidade}" min="1" data-id="${p.id}" readonly>
          <button class="cart-qty-btn" data-id="${p.id}" data-delta="1">+</button>
          <button class="cart-item-remove" data-id="${p.id}">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `;
  });

  cartItems.innerHTML = html;

  // Eventos dos botões de quantidade
  document.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      const delta = parseInt(this.dataset.delta);
      alterarQuantidade(id, delta);
    });
  });

  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      removerDoCarrinho(id);
    });
  });

  atualizarTotal();
}

// ===== BLOCO CARRINHO - EVENTOS =====

function configurarEventosCarrinho() {
  if (modalAddCart) {
    modalAddCart.addEventListener('click', function() {
      if (pendingProduct) {
        adicionarAoCarrinho(pendingProduct);
        if (cartPanel) {
          cartPanel.classList.add('aberto');
          // 🔴 NOVO: Rola a página até o carrinho
          cartPanel.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    });
  }

  if (modalGoWpp) {
    modalGoWpp.addEventListener('click', function() {
      if (pendingProduct) {
        if (carrinho.length === 0) {
          irParaWhatsapp(pendingProduct);
        } else {
          adicionarAoCarrinho(pendingProduct);
          irParaWhatsappComCarrinho();
        }
        fecharModal();
      }
    });
  }

  if (modalCancel) {
    modalCancel.addEventListener('click', fecharModal);
  }

  if (cartModal) {
    cartModal.addEventListener('click', function(e) {
      if (e.target === cartModal) fecharModal();
    });
  }

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', function() {
      if (cartPanel) {
        cartPanel.classList.toggle('aberto');
        if (cartPanel.classList.contains('aberto')) {
          renderizarCarrinho();
          // 🔴 NOVO: Rola a página até o carrinho
          cartPanel.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', limparCarrinho);
  }

  if (finalizarCartBtn) {
    finalizarCartBtn.addEventListener('click', function() {
      if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
      }
      irParaWhatsappComCarrinho();
    });
  }
}

// Exporta funções para uso global
window.carrinho = carrinho;
window.atualizarBadge = atualizarBadge;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.gerenciarCliqueQueroEste = gerenciarCliqueQueroEste;
window.renderizarCarrinho = renderizarCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.irParaWhatsappComCarrinho = irParaWhatsappComCarrinho;

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    configurarEventosCarrinho();
    renderizarCarrinho();
    atualizarBadge();
  });
} else {
  configurarEventosCarrinho();
  renderizarCarrinho();
  atualizarBadge();
}

console.log('🛒 Carrinho inicializado');