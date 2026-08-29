// ===== BLOCO PRODUTOS - CONTROLE DE PRODUTOS =====
// Para controlar quais produtos aparecem:
// 1. Para OCULTAR um produto, mude "ativo: true" para "ativo: false"
// 2. Para ALTERAR a categoria, mude o valor de "category"
// 3. Para ALTERAR a tag (destaque, promo, novo), mude o valor de "tag"
// 4. Para adicionar um novo produto, copie a estrutura e incremente o ID
// 5. Para remover um produto, delete a linha completa ou mude "ativo: false"
// 6. Para produtos CONSIGNADOS, use "tipo: 'consignado'"
// 7. Para produtos PERSONALIZÁVEIS, use "tipo: 'personalizavel'"
// 8. Para produtos NORMAIS, não use o campo "tipo"

const PRODUTOS = [
  // ===== PRODUTOS CONSIGNADOS (10 produtos) =====
  { id: 91, name: "Kit Impressora 3D", desc: "Consignado - Impressora Ender 3", price: "R$ 1.499,90", category: "consignado", sub: "", icon: "fa-print", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 92, name: "Resina 3D Premium", desc: "Consignado - 1L, alta definição", price: "R$ 199,90", category: "consignado", sub: "", icon: "fa-flask", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 93, name: "Filamento PLA 1kg", desc: "Consignado - diversas cores", price: "R$ 89,90", category: "consignado", sub: "", icon: "fa-circle", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 94, name: "Kit Ferramentas 3D", desc: "Consignado - 15 peças", price: "R$ 149,90", category: "consignado", sub: "", icon: "fa-tools", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 95, name: "Suporte para Impressora", desc: "Consignado - estrutura reforçada", price: "R$ 299,90", category: "consignado", sub: "", icon: "fa-cubes", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 96, name: "Kit Lâmpadas UV", desc: "Consignado - para cura de resina", price: "R$ 129,90", category: "consignado", sub: "", icon: "fa-sun", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 97, name: "Estação de Cura", desc: "Consignado - completa", price: "R$ 449,90", category: "consignado", sub: "", icon: "fa-lightbulb", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 98, name: "Kit Lixas para 3D", desc: "Consignado - 10 peças", price: "R$ 34,90", category: "consignado", sub: "", icon: "fa-sand", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 99, name: "Spray Primer 3D", desc: "Consignado - 400ml", price: "R$ 29,90", category: "consignado", sub: "", icon: "fa-spray-can", tag: "consignado", tipo: "consignado", ativo: true },
  { id: 100, name: "Kit Tintas para 3D", desc: "Consignado - 6 cores", price: "R$ 79,90", category: "consignado", sub: "", icon: "fa-paint-roller", tag: "consignado", tipo: "consignado", ativo: true },

  // ===== PRODUTOS PERSONALIZÁVEIS (10 produtos) =====
  { id: 101, name: "Suporte Personalizado", desc: "Com seu nome ou logo", price: "R$ 49,90", category: "personalizaveis", sub: "", icon: "fa-cube", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 102, name: "Capa de Celular Personalizada", desc: "Sua arte em 3D", price: "R$ 59,90", category: "personalizaveis", sub: "", icon: "fa-mobile-screen", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 103, name: "Miniatura Personalizada", desc: "Crie seu personagem", price: "R$ 89,90", category: "personalizaveis", sub: "", icon: "fa-chess-queen", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 104, name: "Caneca 3D Personalizada", desc: "Com sua mensagem", price: "R$ 34,90", category: "personalizaveis", sub: "", icon: "fa-mug-hot", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 105, name: "Chaveiro Personalizado", desc: "Com seu nome", price: "R$ 19,90", category: "personalizaveis", sub: "", icon: "fa-key", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 106, name: "Busto Personalizado", desc: "Sua imagem em 3D", price: "R$ 149,90", category: "personalizaveis", sub: "", icon: "fa-user", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 107, name: "Relógio Personalizado", desc: "Com seu design", price: "R$ 99,90", category: "personalizaveis", sub: "", icon: "fa-clock", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 108, name: "Luminária Personalizada", desc: "Com sua arte", price: "R$ 79,90", category: "personalizaveis", sub: "", icon: "fa-lightbulb", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 109, name: "Quebra-cabeça 3D Personalizado", desc: "Sua foto em 3D", price: "R$ 69,90", category: "personalizaveis", sub: "", icon: "fa-puzzle-piece", tag: "personalizavel", tipo: "personalizavel", ativo: true },
  { id: 110, name: "Porta-retrato Personalizado", desc: "Com sua mensagem", price: "R$ 44,90", category: "personalizaveis", sub: "", icon: "fa-image", tag: "personalizavel", tipo: "personalizavel", ativo: true },

  // ===== DECORAÇÃO (20 produtos) =====
  { id: 1, name: "Vaso Minimalista", desc: "Design clean, 15cm", price: "R$ 49,90", category: "decoracao", sub: "vasos", icon: "fa-flower", tag: "novo", ativo: true },
  { id: 2, name: "Vaso Geométrico", desc: "Design moderno, 20cm", price: "R$ 59,90", category: "decoracao", sub: "vasos", icon: "fa-flower", tag: "", ativo: true },
  { id: 3, name: "Porta-retrato 3D", desc: "10x15cm, relevo", price: "R$ 44,90", category: "decoracao", sub: "quadros", icon: "fa-image", tag: "", ativo: true },
  { id: 4, name: "Relógio de Mesa", desc: "mostrador 8cm", price: "R$ 89,90", category: "decoracao", sub: "quadros", icon: "fa-clock", tag: "destaque", ativo: true },
  { id: 5, name: "Luminária Abajur", desc: "base 3D, 20cm", price: "R$ 79,90", category: "decoracao", sub: "luminarias", icon: "fa-lightbulb", tag: "novo", ativo: true },
  { id: 6, name: "Luminária de Mesa", desc: "com difusor", price: "R$ 84,90", category: "decoracao", sub: "luminarias", icon: "fa-lamp", tag: "", ativo: true },
  { id: 7, name: "Mandala Decorativa", desc: "30cm, parede", price: "R$ 59,90", category: "decoracao", sub: "quadros", icon: "fa-circle", tag: "", ativo: true },
  { id: 8, name: "Quadro 3D Abstrato", desc: "40x60cm", price: "R$ 129,90", category: "decoracao", sub: "quadros", icon: "fa-paint-brush", tag: "", ativo: true },
  { id: 9, name: "Porta-velas", desc: "kit 3 peças", price: "R$ 34,90", category: "decoracao", sub: "vasos", icon: "fa-candle", tag: "promo", ativo: true },
  { id: 10, name: "Suporte para Livros", desc: "formato de árvore", price: "R$ 54,90", category: "decoracao", sub: "vasos", icon: "fa-tree", tag: "", ativo: true },

  // ===== UTILITÁRIOS (20 produtos) =====
  { id: 11, name: "Suporte para Celular", desc: "Ajustável, 360°", price: "R$ 34,90", category: "utilitarios", sub: "suportes", icon: "fa-mobile-screen", tag: "destaque", ativo: true },
  { id: 12, name: "Suporte para Tablet", desc: "ajustável", price: "R$ 49,90", category: "utilitarios", sub: "suportes", icon: "fa-tablet", tag: "novo", ativo: true },
  { id: 13, name: "Suporte para Notebook", desc: "elevado 15°", price: "R$ 59,90", category: "utilitarios", sub: "suportes", icon: "fa-laptop", tag: "destaque", ativo: true },
  { id: 14, name: "Suporte para Fones", desc: "com base antiderrapante", price: "R$ 39,90", category: "utilitarios", sub: "suportes", icon: "fa-headphones", tag: "", ativo: true },
  { id: 15, name: "Organizador de Gaveta", desc: "3 divisórias", price: "R$ 29,90", category: "utilitarios", sub: "organizadores", icon: "fa-box", tag: "", ativo: true },
  { id: 16, name: "Base para Canetas", desc: "3 compartimentos", price: "R$ 19,90", category: "utilitarios", sub: "organizadores", icon: "fa-pen", tag: "promo", ativo: true },
  { id: 17, name: "Organizador de Escrivaninha", desc: "3 compartimentos", price: "R$ 44,90", category: "utilitarios", sub: "organizadores", icon: "fa-desktop", tag: "", ativo: true },
  { id: 18, name: "Organizador de Cabos", desc: "kit 3 peças", price: "R$ 14,90", category: "utilitarios", sub: "organizadores", icon: "fa-plug", tag: "", ativo: true },
  { id: 19, name: "Suporte para Smartwatch", desc: "carregador", price: "R$ 34,90", category: "utilitarios", sub: "suportes", icon: "fa-clock", tag: "", ativo: true },
  { id: 20, name: "Porta-óculos", desc: "acabamento suave", price: "R$ 24,90", category: "utilitarios", sub: "suportes", icon: "fa-glasses", tag: "", ativo: true },

  // ===== MINIATURAS (20 produtos) =====
  { id: 21, name: "Dragão Articulado", desc: "20cm, articulação total", price: "R$ 79,90", category: "miniaturas", sub: "animais", icon: "fa-dragon", tag: "promo", ativo: true },
  { id: 22, name: "Cavalo Viking", desc: "miniatura 12cm", price: "R$ 69,90", category: "miniaturas", sub: "animais", icon: "fa-horse", tag: "destaque", ativo: true },
  { id: 23, name: "Robô Articulado", desc: "15cm, braços móveis", price: "R$ 99,90", category: "miniaturas", sub: "personagens", icon: "fa-robot", tag: "novo", ativo: true },
  { id: 24, name: "Guerreiro Medieval", desc: "com espada e escudo", price: "R$ 59,90", category: "miniaturas", sub: "personagens", icon: "fa-helmet-safety", tag: "", ativo: true },
  { id: 25, name: "Fênix 3D", desc: "30cm, asas abertas", price: "R$ 89,90", category: "miniaturas", sub: "animais", icon: "fa-crow", tag: "destaque", ativo: true },
  { id: 26, name: "T-Rex Articulado", desc: "30cm, articulado", price: "R$ 99,90", category: "miniaturas", sub: "animais", icon: "fa-dragon", tag: "promo", ativo: true },
  { id: 27, name: "Tanque Militar", desc: "15cm, detalhes", price: "R$ 74,90", category: "miniaturas", sub: "veiculos", icon: "fa-tank", tag: "", ativo: true },
  { id: 28, name: "Navio Pirata", desc: "20cm, velas", price: "R$ 94,90", category: "miniaturas", sub: "veiculos", icon: "fa-ship", tag: "", ativo: true },
  { id: 29, name: "Avião de Combate", desc: "20cm, detalhes", price: "R$ 84,90", category: "miniaturas", sub: "veiculos", icon: "fa-plane", tag: "", ativo: true },
  { id: 30, name: "Moto Esportiva", desc: "15cm, detalhes", price: "R$ 79,90", category: "miniaturas", sub: "veiculos", icon: "fa-motorcycle", tag: "promo", ativo: true },

  // ===== CHAVEIROS (10 produtos) =====
  { id: 31, name: "Chaveiro Coração", desc: "3D, 5cm", price: "R$ 12,90", category: "chaveiros", sub: "", icon: "fa-heart", tag: "", ativo: true },
  { id: 32, name: "Chaveiro Letra Personalizada", desc: "inicial", price: "R$ 14,90", category: "chaveiros", sub: "", icon: "fa-font", tag: "novo", ativo: true },
  { id: 33, name: "Chaveiro Gato", desc: "3D, 6cm", price: "R$ 15,90", category: "chaveiros", sub: "", icon: "fa-cat", tag: "", ativo: true },
  { id: 34, name: "Chaveiro Futebol", desc: "bola 3D", price: "R$ 12,90", category: "chaveiros", sub: "", icon: "fa-futbol", tag: "promo", ativo: true },
  { id: 35, name: "Chaveiro Pikachu", desc: "3D, 6cm", price: "R$ 18,90", category: "chaveiros", sub: "", icon: "fa-bolt", tag: "destaque", ativo: true },
  { id: 36, name: "Chaveiro Dinossauro", desc: "3D, 6cm", price: "R$ 16,90", category: "chaveiros", sub: "", icon: "fa-dragon", tag: "", ativo: true },
  { id: 37, name: "Chaveiro Flor", desc: "3D, 5cm", price: "R$ 12,90", category: "chaveiros", sub: "", icon: "fa-flower", tag: "", ativo: true },
  { id: 38, name: "Chaveiro Skate", desc: "3D, 5cm", price: "R$ 14,90", category: "chaveiros", sub: "", icon: "fa-snowboarding", tag: "", ativo: true },
  { id: 39, name: "Chaveiro Pizza", desc: "3D, 5cm", price: "R$ 14,90", category: "chaveiros", sub: "", icon: "fa-pizza-slice", tag: "promo", ativo: true },
  { id: 40, name: "Chaveiro Dado", desc: "3D, 3cm", price: "R$ 10,90", category: "chaveiros", sub: "", icon: "fa-dice", tag: "", ativo: true },

  // ===== CELULARES (10 produtos) =====
  { id: 41, name: "Capa iPhone 15 Pro", desc: "com relevo 3D", price: "R$ 39,90", category: "celulares", sub: "capas", icon: "fa-mobile-screen", tag: "novo", ativo: true },
  { id: 42, name: "Capa iPhone 14", desc: "com arte 3D", price: "R$ 34,90", category: "celulares", sub: "capas", icon: "fa-mobile-screen", tag: "", ativo: true },
  { id: 43, name: "Capa Samsung S24", desc: "proteção 3D", price: "R$ 39,90", category: "celulares", sub: "capas", icon: "fa-mobile-screen", tag: "", ativo: true },
  { id: 44, name: "Suporte Carro", desc: "ventilação", price: "R$ 29,90", category: "celulares", sub: "suportes", icon: "fa-car", tag: "", ativo: true },
  { id: 45, name: "Suporte Mesa", desc: "ajustável", price: "R$ 24,90", category: "celulares", sub: "suportes", icon: "fa-table", tag: "", ativo: true },
  { id: 46, name: "Anel de Dedal", desc: "para segurar celular", price: "R$ 14,90", category: "celulares", sub: "suportes", icon: "fa-ring", tag: "promo", ativo: true },
  { id: 47, name: "Suporte Bike", desc: "para celular", price: "R$ 34,90", category: "celulares", sub: "suportes", icon: "fa-bicycle", tag: "destaque", ativo: true },
  { id: 48, name: "Base Carregadora", desc: "com suporte", price: "R$ 49,90", category: "celulares", sub: "suportes", icon: "fa-battery-full", tag: "novo", ativo: true },
  { id: 49, name: "Porta-cartão", desc: "para trás do celular", price: "R$ 14,90", category: "celulares", sub: "capas", icon: "fa-credit-card", tag: "", ativo: true },
  { id: 50, name: "Suporte Selfie", desc: "com tripé", price: "R$ 44,90", category: "celulares", sub: "suportes", icon: "fa-camera", tag: "novo", ativo: true },

  // ===== TABLETS (6 produtos) =====
  { id: 51, name: "Suporte para iPad", desc: "ajustável 360°", price: "R$ 49,90", category: "tablets", sub: "", icon: "fa-tablet", tag: "destaque", ativo: true },
  { id: 52, name: "Capa iPad 10", desc: "com relevo 3D", price: "R$ 59,90", category: "tablets", sub: "", icon: "fa-tablet", tag: "", ativo: true },
  { id: 53, name: "Suporte Mesa", desc: "para tablets", price: "R$ 39,90", category: "tablets", sub: "", icon: "fa-chair", tag: "", ativo: true },
  { id: 54, name: "Capa Samsung Tab", desc: "proteção 3D", price: "R$ 54,90", category: "tablets", sub: "", icon: "fa-tablet", tag: "novo", ativo: true },
  { id: 55, name: "Suporte Carro", desc: "para tablet", price: "R$ 44,90", category: "tablets", sub: "", icon: "fa-car", tag: "", ativo: true },
  { id: 56, name: "Suporte Sofá", desc: "ajustável", price: "R$ 59,90", category: "tablets", sub: "", icon: "fa-couch", tag: "destaque", ativo: true },

  // ===== NOTEBOOK (6 produtos) =====
  { id: 57, name: "Suporte para Notebook", desc: "15° elevação", price: "R$ 59,90", category: "notebook", sub: "", icon: "fa-laptop", tag: "destaque", ativo: true },
  { id: 58, name: "Base com Cooler", desc: "ventilação", price: "R$ 69,90", category: "notebook", sub: "", icon: "fa-fan", tag: "", ativo: true },
  { id: 59, name: "Suporte Duplo", desc: "para 2 notebooks", price: "R$ 79,90", category: "notebook", sub: "", icon: "fa-laptop", tag: "novo", ativo: true },
  { id: 60, name: "Base Ergonômica", desc: "ajustável", price: "R$ 89,90", category: "notebook", sub: "", icon: "fa-chair", tag: "", ativo: true },
  { id: 61, name: "Suporte com USB", desc: "hub integrado", price: "R$ 99,90", category: "notebook", sub: "", icon: "fa-usb", tag: "destaque", ativo: true },
  { id: 62, name: "Base Resfriadora", desc: "silenciosa", price: "R$ 74,90", category: "notebook", sub: "", icon: "fa-snowflake", tag: "", ativo: true },

  // ===== INFANTIL (8 produtos) =====
  { id: 63, name: "Quebra-cabeça 3D", desc: "animal, 12 peças", price: "R$ 29,90", category: "infantil", sub: "", icon: "fa-puzzle-piece", tag: "novo", ativo: true },
  { id: 64, name: "Carrinho Articulado", desc: "15cm, rodas", price: "R$ 34,90", category: "infantil", sub: "", icon: "fa-car", tag: "", ativo: true },
  { id: 65, name: "Dinossauro de Montar", desc: "10 peças", price: "R$ 39,90", category: "infantil", sub: "", icon: "fa-dragon", tag: "destaque", ativo: true },
  { id: 66, name: "Boneco Articulado", desc: "15cm, super-herói", price: "R$ 44,90", category: "infantil", sub: "", icon: "fa-mask", tag: "", ativo: true },
  { id: 67, name: "Jogo da Velha", desc: "3D, 3x3", price: "R$ 19,90", category: "infantil", sub: "", icon: "fa-th", tag: "promo", ativo: true },
  { id: 68, name: "Blocos de Montar", desc: "30 peças", price: "R$ 49,90", category: "infantil", sub: "", icon: "fa-cubes", tag: "novo", ativo: true },
  { id: 69, name: "Casa de Boneca", desc: "15cm, móveis", price: "R$ 59,90", category: "infantil", sub: "", icon: "fa-house", tag: "", ativo: true },
  { id: 70, name: "Robô Brinquedo", desc: "15cm, articulado", price: "R$ 44,90", category: "infantil", sub: "", icon: "fa-robot", tag: "novo", ativo: true },

  // ===== ESCRITÓRIO (10 produtos) =====
  { id: 71, name: "Organizador de Canetas", desc: "6 compartimentos", price: "R$ 29,90", category: "escritorio", sub: "", icon: "fa-pen", tag: "", ativo: true },
  { id: 72, name: "Organizador de Mesa", desc: "com gaveta", price: "R$ 49,90", category: "escritorio", sub: "", icon: "fa-drawer", tag: "destaque", ativo: true },
  { id: 73, name: "Suporte para Caneca", desc: "com nome", price: "R$ 24,90", category: "escritorio", sub: "", icon: "fa-mug-hot", tag: "", ativo: true },
  { id: 74, name: "Porta-canetas", desc: "design moderno", price: "R$ 19,90", category: "escritorio", sub: "", icon: "fa-pen", tag: "", ativo: true },
  { id: 75, name: "Organizador de Documentos", desc: "3 divisórias", price: "R$ 34,90", category: "escritorio", sub: "", icon: "fa-file", tag: "", ativo: true },
  { id: 76, name: "Suporte para Café", desc: "com aquecimento", price: "R$ 44,90", category: "escritorio", sub: "", icon: "fa-coffee", tag: "novo", ativo: true },
  { id: 77, name: "Porta-lápis", desc: "com 5 furos", price: "R$ 16,90", category: "escritorio", sub: "", icon: "fa-pencil", tag: "", ativo: true },
  { id: 78, name: "Organizador de Escrivaninha", desc: "compartimentos", price: "R$ 39,90", category: "escritorio", sub: "", icon: "fa-draw-polygon", tag: "", ativo: true },
  { id: 79, name: "Porta-celular", desc: "com carregador", price: "R$ 39,90", category: "escritorio", sub: "", icon: "fa-mobile-screen", tag: "destaque", ativo: true },
  { id: 80, name: "Organizador de Fones", desc: "com fio", price: "R$ 24,90", category: "escritorio", sub: "", icon: "fa-headphones", tag: "novo", ativo: true },

  // ===== ACESSÓRIOS (10 produtos) =====
  { id: 81, name: "Suporte para Relógio", desc: "mesa, 3D", price: "R$ 29,90", category: "acessorios", sub: "", icon: "fa-clock", tag: "", ativo: true },
  { id: 82, name: "Porta-joias", desc: "colar, anéis", price: "R$ 39,90", category: "acessorios", sub: "", icon: "fa-gem", tag: "destaque", ativo: true },
  { id: 83, name: "Suporte para Óculos", desc: "mesa", price: "R$ 24,90", category: "acessorios", sub: "", icon: "fa-glasses", tag: "promo", ativo: true },
  { id: 84, name: "Porta-chaves de Parede", desc: "5 ganchos", price: "R$ 29,90", category: "acessorios", sub: "", icon: "fa-key", tag: "promo", ativo: true },
  { id: 85, name: "Organizador de Tênis", desc: "2 pares", price: "R$ 44,90", category: "acessorios", sub: "", icon: "fa-shoe-prints", tag: "destaque", ativo: true },
  { id: 86, name: "Organizador de Cabos", desc: "mesa, 3D", price: "R$ 19,90", category: "acessorios", sub: "", icon: "fa-plug", tag: "", ativo: true },
  { id: 87, name: "Organizador de Maquiagem", desc: "compartimentos", price: "R$ 49,90", category: "acessorios", sub: "", icon: "fa-paint-brush", tag: "novo", ativo: true },
  { id: 88, name: "Organizador de Perfumes", desc: "3D, 6 frascos", price: "R$ 39,90", category: "acessorios", sub: "", icon: "fa-spray-can", tag: "", ativo: true },
  { id: 89, name: "Porta-cartão de Visita", desc: "mesa, 3D", price: "R$ 16,90", category: "acessorios", sub: "", icon: "fa-id-card", tag: "destaque", ativo: true },
  { id: 90, name: "Suporte para Bolsa", desc: "mesa, 3D", price: "R$ 39,90", category: "acessorios", sub: "", icon: "fa-bag", tag: "", ativo: true },
];

// Filtra apenas produtos ativos
const PRODUTOS_ATIVOS = PRODUTOS.filter(p => p.ativo !== false);

console.log(`📦 ${PRODUTOS_ATIVOS.length} produtos carregados`);