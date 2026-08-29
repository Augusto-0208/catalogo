// ===== BLOCO DARK MODE =====

(function() {
  'use strict';

  console.log('🔧 Inicializando Dark Mode...');

  function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById('darkToggleBtn');
    const label = document.getElementById('darkToggleLabel');
    
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    if (btn) {
      btn.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light' : '<i class="fas fa-moon"></i> Dark';
    }
    if (label) {
      label.textContent = isDark ? 'Light' : 'Dark';
    }
    
    try {
      localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    } catch(e) {
      console.warn('Erro ao salvar preferência:', e);
    }
    
    console.log(`🌓 Dark Mode ${isDark ? 'ativado' : 'desativado'}`);
  }

  function carregarPreferencia() {
    const body = document.body;
    const btn = document.getElementById('darkToggleBtn');
    const label = document.getElementById('darkToggleLabel');
    
    try {
      const isDark = localStorage.getItem('darkMode') === 'true';
      
      if (isDark) {
        body.classList.add('dark-mode');
        if (btn) {
          btn.innerHTML = '<i class="fas fa-sun"></i> Light';
        }
        if (label) {
          label.textContent = 'Light';
        }
        console.log('🌙 Dark Mode carregado do localStorage');
      } else {
        body.classList.remove('dark-mode');
        if (btn) {
          btn.innerHTML = '<i class="fas fa-moon"></i> Dark';
        }
        if (label) {
          label.textContent = 'Dark';
        }
        console.log('☀️ Modo claro carregado');
      }
    } catch(e) {
      console.warn('Erro ao carregar preferência:', e);
    }
  }

  function init() {
    const btn = document.getElementById('darkToggleBtn');
    
    if (!btn) {
      console.error('❌ Botão Dark Mode não encontrado!');
      return;
    }
    
    carregarPreferencia();
    btn.addEventListener('click', toggleDarkMode);
    console.log('✅ Dark Mode inicializado com sucesso!');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();