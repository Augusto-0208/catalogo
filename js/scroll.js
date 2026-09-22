// ===== BLOCO SCROLL - BOTÃO VOLTAR AO TOPO =====

document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  
  if (!backToTopBtn) return;

  // Mostra ou esconde o botão dependendo da rolagem da página
  window.addEventListener('scroll', function() {
    // Se o usuário rolar mais de 300px para baixo, mostra o botão
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Rola suavemente para o topo ao clicar no botão
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});