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
// 9. Para adicionar IMAGEM, use o campo "img" com o caminho da pasta. Ex: "img/natal/arvore.jpg"

const PRODUTOS = [
  // ===== PRODUTOS CONSIGNADOS (10 produtos) =====
  { id: 91, name: "Kit Impressora 3D", desc: "Consignado - Impressora Ender 3", price: "R$ 1.499,90", category: "consignado", sub: "", icon: "fa-print", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 92, name: "Resina 3D Premium", desc: "Consignado - 1L, alta definição", price: "R$ 199,90", category: "consignado", sub: "", icon: "fa-flask", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 93, name: "Filamento PLA 1kg", desc: "Consignado - diversas cores", price: "R$ 89,90", category: "consignado", sub: "", icon: "fa-circle", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 94, name: "Kit Ferramentas 3D", desc: "Consignado - 15 peças", price: "R$ 149,90", category: "consignado", sub: "", icon: "fa-tools", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 95, name: "Suporte para Impressora", desc: "Consignado - estrutura reforçada", price: "R$ 299,90", category: "consignado", sub: "", icon: "fa-cubes", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 96, name: "Kit Lâmpadas UV", desc: "Consignado - para cura de resina", price: "R$ 129,90", category: "consignado", sub: "", icon: "fa-sun", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 97, name: "Estação de Cura", desc: "Consignado - completa", price: "R$ 449,90", category: "consignado", sub: "", icon: "fa-lightbulb", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 98, name: "Kit Lixas para 3D", desc: "Consignado - 10 peças", price: "R$ 34,90", category: "consignado", sub: "", icon: "fa-sand", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 99, name: "Spray Primer 3D", desc: "Consignado - 400ml", price: "R$ 29,90", category: "consignado", sub: "", icon: "fa-spray-can", tag: "consignado", tipo: "consignado", ativo: true, img: "" },
  { id: 100, name: "Kit Tintas para 3D", desc: "Consignado - 6 cores", price: "R$ 79,90", category: "consignado", sub: "", icon: "fa-paint-roller", tag: "consignado", tipo: "consignado", ativo: true, img: "" },

  // ===== PRODUTOS PERSONALIZÁVEIS (10 produtos) =====
  { id: 101, name: "Suporte Personalizado", desc: "Com seu nome ou logo", price: "R$ 49,90", category: "personalizaveis", sub: "", icon: "fa-cube", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 102, name: "Capa de Celular Personalizada", desc: "Sua arte em 3D", price: "R$ 59,90", category: "personalizaveis", sub: "", icon: "fa-mobile-screen", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 103, name: "Miniatura Personalizada", desc: "Crie seu personagem", price: "R$ 89,90", category: "personalizaveis", sub: "", icon: "fa-chess-queen", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 104, name: "Caneca 3D Personalizada", desc: "Com sua mensagem", price: "R$ 34,90", category: "personalizaveis", sub: "", icon: "fa-mug-hot", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 105, name: "Chaveiro Personalizado", desc: "Com seu nome", price: "R$ 19,90", category: "personalizaveis", sub: "", icon: "fa-key", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 106, name: "Busto Personalizado", desc: "Sua imagem em 3D", price: "R$ 149,90", category: "personalizaveis", sub: "", icon: "fa-user", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 107, name: "Relógio Personalizado", desc: "Com seu design", price: "R$ 99,90", category: "personalizaveis", sub: "", icon: "fa-clock", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 108, name: "Luminária Personalizada", desc: "Com sua arte", price: "R$ 79,90", category: "personalizaveis", sub: "", icon: "fa-lightbulb", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 109, name: "Quebra-cabeça 3D Personalizado", desc: "Sua foto em 3D", price: "R$ 69,90", category: "personalizaveis", sub: "", icon: "fa-puzzle-piece", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },
  { id: 110, name: "Porta-retrato Personalizado", desc: "Com sua mensagem", price: "R$ 44,90", category: "personalizaveis", sub: "", icon: "fa-image", tag: "personalizavel", tipo: "personalizavel", ativo: true, img: "" },

  // ===== NOVAS CATEGORIAS: NATAL (5 produtos exemplo) =====
  { id: 111, name: "Enfeite de Natal", desc: "Árvore 3D detalhada", price: "R$ 29,90", category: "natal", sub: "", icon: "fa-tree", tag: "novo", ativo: true, img: "img/natal/enfeite_arvore.jpg" },
  { id: 112, name: "Papai Noel Articulado", desc: "15cm, braços e pernas móveis", price: "R$ 49,90", category: "natal", sub: "", icon: "fa-santa", tag: "destaque", ativo: true, img: "img/natal/papai_noel.jpg" },
  { id: 113, name: "Presépio 3D", desc: "Kit completo com 10 peças", price: "R$ 89,90", category: "natal", sub: "", icon: "fa-church", tag: "", ativo: true, img: "img/natal/presepio.jpg" },
  { id: 114, name: "Guirlanda Decorativa", desc: "20cm, design floral", price: "R$ 39,90", category: "natal", sub: "", icon: "fa-circle", tag: "promo", ativo: true, img: "img/natal/guirlanda.jpg" },
  { id: 115, name: "Sino de Natal", desc: "Dourado, 10cm", price: "R$ 19,90", category: "natal", sub: "", icon: "fa-bell", tag: "", ativo: true, img: "img/natal/sino.jpg" },

  // ===== NOVAS CATEGORIAS: LITOFANIA (5 produtos exemplo) =====
  { id: 116, name: "Litofania Personalizada", desc: "Sua foto em 3D com luz LED", price: "R$ 79,90", category: "litofania", sub: "", icon: "fa-image", tag: "destaque", ativo: true, img: "img/litofania/litofania_personalizada.jpg" },
  { id: 117, name: "Litofania Coração", desc: "Para presente romântico", price: "R$ 59,90", category: "litofania", sub: "", icon: "fa-heart", tag: "novo", ativo: true, img: "img/litofania/litofania_coracao.jpg" },
  { id: 118, name: "Litofania Familiar", desc: "Até 4 pessoas", price: "R$ 99,90", category: "litofania", sub: "", icon: "fa-users", tag: "", ativo: true, img: "img/litofania/litofania_familia.jpg" },
  { id: 119, name: "Litofania de Pet", desc: "Seu animal de estimação", price: "R$ 69,90", category: "litofania", sub: "", icon: "fa-paw", tag: "promo", ativo: true, img: "img/litofania/litofania_pet.jpg" },
  { id: 120, name: "Luminária Litofania", desc: "Base de madeira e LED", price: "R$ 129,90", category: "litofania", sub: "", icon: "fa-lightbulb", tag: "", ativo: true, img: "img/litofania/luminaria_litofania.jpg" },

  // ===== NOVAS CATEGORIAS: RELIGIOSOS (5 produtos exemplo) =====
  { id: 121, name: "Cruz Decorativa", desc: "Para parede, 20cm", price: "R$ 39,90", category: "religiosos", sub: "", icon: "fa-cross", tag: "novo", ativo: true, img: "img/religiosos/cruz.jpg" },
  { id: 122, name: "Nossa Senhora", desc: "Imagem 3D, 15cm", price: "R$ 59,90", category: "religiosos", sub: "", icon: "fa-person", tag: "destaque", ativo: true, img: "img/religiosos/nossa_senhora.jpg" },
  { id: 123, name: "Terço 3D", desc: "Com contas detalhadas", price: "R$ 29,90", category: "religiosos", sub: "", icon: "fa-circle-notch", tag: "", ativo: true, img: "img/religiosos/terco.jpg" },
  { id: 124, name: "Anjo da Guarda", desc: "Estátua 3D, 12cm", price: "R$ 49,90", category: "religiosos", sub: "", icon: "fa-feather", tag: "promo", ativo: true, img: "img/religiosos/anjo.jpg" },
  { id: 125, name: "Porta-incenso", desc: "Com detalhes religiosos", price: "R$ 34,90", category: "religiosos", sub: "", icon: "fa-fire", tag: "", ativo: true, img: "img/religiosos/porta_incenso.jpg" },

  // ===== DECORAÇÃO (20 produtos) =====
  { id: 1, name: "Vaso Minimalista", desc: "Design clean, 15cm", price: "R$ 49,90", category: "decoracao", sub: "vasos", icon: "fa-flower", tag: "novo", ativo: true, img: "" },
  { id: 2, name: "Vaso Geométrico", desc: "Design moderno, 20cm", price: "R$ 59,90", category: "decoracao", sub: "vasos", icon: "fa-flower", tag: "", ativo: true, img: "" },
  { id: 3, name: "Porta-retrato 3D", desc: "10x15cm, relevo", price: "R$ 44,90", category: "decoracao", sub: "quadros", icon: "fa-image", tag: "", ativo: true, img: "" },
  { id: 4, name: "Relógio de Mesa", desc: "mostrador 8cm", price: "R$ 89,90", category: "decoracao", sub: "quadros", icon: "fa-clock", tag: "destaque", ativo: true, img: "" },
  { id: 5, name: "Luminária Abajur", desc: "base 3D, 20cm", price: "R$ 79,90", category: "decoracao", sub: "luminarias", icon: "fa-lightbulb", tag: "novo", ativo: true, img: "" },
  { id: 6, name: "Luminária de Mesa", desc: "com difusor", price: "R$ 84,90", category: "decoracao", sub: "luminarias", icon: "fa-lamp", tag: "", ativo: true, img: "" },
  { id: 7, name: "Mandala Decorativa", desc: "30cm, parede", price: "R$ 59,90", category: "decoracao", sub: "quadros", icon: "fa-circle", tag: "", ativo: true, img: "" },
  { id: 8, name: "Quadro 3D Abstrato", desc: "40x60cm", price: "R$ 129,90", category: "decoracao", sub: "quadros", icon: "fa-paint-brush", tag: "", ativo: true, img: "" },
  { id: 9, name: "Porta-velas", desc: "kit 3 peças", price: "R$ 34,90", category: "decoracao", sub: "vasos", icon: "fa-candle", tag: "promo", ativo: true, img: "" },
  { id: 10, name: "Suporte para Livros", desc: "formato de árvore", price: "R$ 54,90", category: "decoracao", sub: "vasos", icon: "fa-tree", tag: "", ativo: true, img: "" },

  // ===== UTILITÁRIOS (20 produtos) =====
  { id: 11, name: "Suporte para Celular", desc: "Ajustável, 360°", price: "R$ 34,90", category: "utilitarios", sub: "suportes", icon: "fa-mobile-screen", tag: "destaque", ativo: true, img: "" },
  { id: 12, name: "Suporte para Tablet", desc: "ajustável", price: "R$ 49,90", category: "utilitarios", sub: "suportes", icon: "fa-tablet", tag: "novo", ativo: true, img: "" },
  { id: 13, name: "Suporte para Notebook", desc: "elevado 15°", price: "R$ 59,90", category: "utilitarios", sub: "suportes", icon: "fa-laptop", tag: "destaque", ativo: true, img: "" },
  { id: 14, name: "Suporte para Fones", desc: "com base antiderrapante", price: "R$ 39,90", category: "utilitarios", sub: "suportes", icon: "fa-headphones", tag: "", ativo: true, img: "" },
  { id: 15, name: "Organizador de Gaveta", desc: "3 divisórias", price: "R$ 29,90", category: "utilitarios", sub: "organizadores", icon: "fa-box", tag: "", ativo: true, img: "" },
  { id: 16, name: "Base para Canetas", desc: "3 compartimentos", price: "R$ 19,90", category: "utilitarios", sub: "organizadores", icon: "fa-pen", tag: "promo", ativo: true, img: "" },
  { id: 17, name: "Organizador de Escrivaninha", desc: "3 compartimentos", price: "R$ 44,90", category: "utilitarios", sub: "organizadores", icon: "fa-desktop", tag: "", ativo: true, img: "" },
  { id: 18, name: "Organizador de Cabos", desc: "kit 3 peças", price: "R$ 14,90", category: "utilitarios", sub: "organizadores", icon: "fa-plug", tag: "", ativo: true, img: "" },
  { id: 19, name: "Suporte para Smartwatch", desc: "carregador", price: "R$ 34,90", category: "utilitarios", sub: "suportes", icon: "fa-clock", tag: "", ativo: true, img: "" },
  { id: 20, name: "Porta-óculos", desc: "acabamento suave", price: "R$ 24,90", category: "utilitarios", sub: "suportes", icon: "fa-glasses", tag: "", ativo: true, img: "" },

  // ===== MINIATURAS (20 produtos) =====
  { id: 21, name: "Dragão Articulado", desc: "20cm, articulação total", price: "R$ 79,90", category: "miniaturas", sub: "animais", icon: "fa-dragon", tag: "promo", ativo: true, img: "" },
  { id: 22, name: "Cavalo Viking", desc: "miniatura 12cm", price: "R$ 69,90", category: "miniaturas", sub: "animais", icon: "fa-horse", tag: "destaque", ativo: true, img: "" },
  { id: 23, name: "Robô Articulado", desc: "15cm, braços móveis", price: "R$ 99,90", category: "miniaturas", sub: "personagens", icon: "fa-robot", tag: "novo", ativo: true, img: "" },
  { id: 24, name: "Guerreiro Medieval", desc: "com espada e escudo", price: "R$ 59,90", category: "miniaturas", sub: "personagens", icon: "fa-helmet-safety", tag: "", ativo: true, img: "" },
  { id: 25, name: "Fênix 3D", desc: "30cm, asas abertas", price: "R$ 89,90", category: "miniaturas", sub: "animais", icon: "fa-crow", tag: "destaque", ativo: true, img: "" },
  { id: 26, name: "T-Rex Articulado", desc: "30cm, articulado", price: "R$ 99,90", category: "miniaturas", sub: "animais", icon: "fa-dragon", tag: "promo", ativo: true, img: "" },
  { id: 27, name: "Tanque Militar", desc: "15cm, detalhes", price: "R$ 74,90", category: "miniaturas", sub: "veiculos", icon: "fa-tank", tag: "", ativo: true, img: "" },
  { id: 28, name: "Navio Pirata", desc: "20cm, velas", price: "R$ 94,90", category: "miniaturas", sub: "veiculos", icon: "fa-ship", tag: "", ativo: true, img: "" },
  { id: 29, name: "Avião de Combate", desc: "20cm, detalhes", price: "R$ 84,90", category: "miniaturas", sub: "veiculos", icon: "fa-plane", tag: "", ativo: true, img: "" },
  { id: 30, name: "Moto Esportiva", desc: "15cm, detalhes", price: "R$ 79,90", category: "miniaturas", sub: "veiculos", icon: "fa-motorcycle", tag: "promo", ativo: true, img: "" },

  // ===== CHAVEIROS (10 produtos) =====
  { id: 31, name: "Chaveiro Coração", desc: "3D, 5cm", price: "R$ 12,90", category: "chaveiros", sub: "", icon: "fa-heart", tag: "", ativo: true, img: "" },
  { id: 32, name: "Chaveiro Letra Personalizada", desc: "inicial", price: "R$ 14,90", category: "chaveiros", sub: "", icon: "fa-font", tag: "novo", ativo: true, img: "" },
  { id: 33, name: "Chaveiro Gato", desc: "3D, 6cm", price: "R$ 15,90", category: "chaveiros", sub: "", icon: "fa-cat", tag: "", ativo: true, img: "" },
  { id: 34, name: "Chaveiro Futebol", desc: "bola 3D", price: "R$ 12,90", category: "chaveiros", sub: "", icon: "fa-futbol", tag: "promo", ativo: true, img: "" },
  { id: 35, name: "Chaveiro Pikachu", desc: "3D, 6cm", price: "R$ 18,90", category: "chaveiros", sub: "", icon: "fa-bolt", tag: "destaque", ativo: true, img: "" },
  { id: 36, name: "Chaveiro Dinossauro", desc: "3D, 6cm", price: "R$ 16,90", category: "chaveiros", sub: "", icon: "fa-dragon", tag: "", ativo: true, img: "" },
  { id: 37, name: "Chaveiro Flor", desc: "3D, 5cm", price: "R$ 12,90", category: "chaveiros", sub: "", icon: "fa-flower", tag: "", ativo: true, img: "" },
  { id: 38, name: "Chaveiro Skate", desc: "3D, 5cm", price: "R$ 14,90", category: "chaveiros", sub: "", icon: "fa-snowboarding", tag: "", ativo: true, img: "" },
  { id: 39, name: "Chaveiro Pizza", desc: "3D, 5cm", price: "R$ 14,90", category: "chaveiros", sub: "", icon: "fa-pizza-slice", tag: "promo", ativo: true, img: "" },
  { id: 40, name: "Chaveiro Dado", desc: "3D, 3cm", price: "R$ 10,90", category: "chaveiros", sub: "", icon: "fa-dice", tag: "", ativo: true, img: "" },

  // ===== CELULARES (10 produtos) =====
  { id: 41, name: "Capa iPhone 15 Pro", desc: "com relevo 3D", price: "R$ 39,90", category: "celulares", sub: "capas", icon: "fa-mobile-screen", tag: "novo", ativo: true, img: "" },
  { id: 42, name: "Capa iPhone 14", desc: "com arte 3D", price: "R$ 34,90", category: "celulares", sub: "capas", icon: "fa-mobile-screen", tag: "", ativo: true, img: "" },
  { id: 43, name: "Capa Samsung S24", desc: "proteção 3D", price: "R$ 39,90", category: "celulares", sub: "capas", icon: "fa-mobile-screen", tag: "", ativo: true, img: "" },
  { id: 44, name: "Suporte Carro", desc: "ventilação", price: "R$ 29,90", category: "celulares", sub: "suportes", icon: "fa-car", tag: "", ativo: true, img: "" },
  { id: 45, name: "Suporte Mesa", desc: "ajustável", price: "R$ 24,90", category: "celulares", sub: "suportes", icon: "fa-table", tag: "", ativo: true, img: "" },
  { id: 46, name: "Anel de Dedal", desc: "para segurar celular", price: "R$ 14,90", category: "celulares", sub: "suportes", icon: "fa-ring", tag: "promo", ativo: true, img: "" },
  { id: 47, name: "Suporte Bike", desc: "para celular", price: "R$ 34,90", category: "celulares", sub: "suportes", icon: "fa-bicycle", tag: "destaque", ativo: true, img: "" },
  { id: 48, name: "Base Carregadora", desc: "com suporte", price: "R$ 49,90", category: "celulares", sub: "suportes", icon: "fa-battery-full", tag: "novo", ativo: true, img: "" },
  { id: 49, name: "Porta-cartão", desc: "para trás do celular", price: "R$ 14,90", category: "celulares", sub: "capas", icon: "fa-credit-card", tag: "", ativo: true, img: "" },
  { id: 50, name: "Suporte Selfie", desc: "com tripé", price: "R$ 44,90", category: "celulares", sub: "suportes", icon: "fa-camera", tag: "novo", ativo: true, img: "" },

  // ===== TABLETS (6 produtos) =====
  { id: 51, name: "Suporte para Tablet", desc: "", price: "R$ 49,90", category: "tablets", sub: "", icon: "fa-tablet", tag: "destaque", ativo: true, img: "/img/Tablets/Suporte de Mesa para tablet.png" },
  { id: 52, name: "Capa iPad 10", desc: "com relevo 3D", price: "R$ 59,90", category: "tablets", sub: "", icon: "fa-tablet", tag: "", ativo: true, img: "" },
  { id: 53, name: "Suporte Mesa", desc: "para tablets", price: "R$ 39,90", category: "tablets", sub: "", icon: "fa-chair", tag: "", ativo: true, img: "" },
  { id: 54, name: "Capa Samsung Tab", desc: "proteção 3D", price: "R$ 54,90", category: "tablets", sub: "", icon: "fa-tablet", tag: "novo", ativo: true, img: "" },
  { id: 55, name: "Suporte Carro", desc: "para tablet", price: "R$ 44,90", category: "tablets", sub: "", icon: "fa-car", tag: "", ativo: true, img: "" },
  { id: 56, name: "Suporte Sofá", desc: "ajustável", price: "R$ 59,90", category: "tablets", sub: "", icon: "fa-couch", tag: "destaque", ativo: true, img: "" },

  // ===== NOTEBOOK (6 produtos) =====
  { id: 57, name: "Suporte para Notebook", desc: "15° elevação", price: "R$ 59,90", category: "notebook", sub: "", icon: "fa-laptop", tag: "destaque", ativo: true, img: "" },
  { id: 58, name: "Base com Cooler", desc: "ventilação", price: "R$ 69,90", category: "notebook", sub: "", icon: "fa-fan", tag: "", ativo: true, img: "" },
  { id: 59, name: "Suporte Duplo", desc: "para 2 notebooks", price: "R$ 79,90", category: "notebook", sub: "", icon: "fa-laptop", tag: "novo", ativo: true, img: "" },
  { id: 60, name: "Base Ergonômica", desc: "ajustável", price: "R$ 89,90", category: "notebook", sub: "", icon: "fa-chair", tag: "", ativo: true, img: "" },
  { id: 61, name: "Suporte com USB", desc: "hub integrado", price: "R$ 99,90", category: "notebook", sub: "", icon: "fa-usb", tag: "destaque", ativo: true, img: "" },
  { id: 62, name: "Base Resfriadora", desc: "silenciosa", price: "R$ 74,90", category: "notebook", sub: "", icon: "fa-snowflake", tag: "", ativo: true, img: "" },

  // ===== INFANTIL (8 produtos) =====
  { id: 63, name: "Quebra-cabeça 3D", desc: "animal, 12 peças", price: "R$ 29,90", category: "infantil", sub: "", icon: "fa-puzzle-piece", tag: "novo", ativo: true, img: "" },
  { id: 64, name: "Carrinho Articulado", desc: "15cm, rodas", price: "R$ 34,90", category: "infantil", sub: "", icon: "fa-car", tag: "", ativo: true, img: "" },
  { id: 65, name: "Dinossauro de Montar", desc: "10 peças", price: "R$ 39,90", category: "infantil", sub: "", icon: "fa-dragon", tag: "destaque", ativo: true, img: "" },
  { id: 66, name: "Boneco Articulado", desc: "15cm, super-herói", price: "R$ 44,90", category: "infantil", sub: "", icon: "fa-mask", tag: "", ativo: true, img: "" },
  { id: 67, name: "Jogo da Velha", desc: "3D, 3x3", price: "R$ 19,90", category: "infantil", sub: "", icon: "fa-th", tag: "promo", ativo: true, img: "" },
  { id: 68, name: "Blocos de Montar", desc: "30 peças", price: "R$ 49,90", category: "infantil", sub: "", icon: "fa-cubes", tag: "novo", ativo: true, img: "" },
  { id: 69, name: "Casa de Boneca", desc: "15cm, móveis", price: "R$ 59,90", category: "infantil", sub: "", icon: "fa-house", tag: "", ativo: true, img: "" },
  { id: 70, name: "Robô Brinquedo", desc: "15cm, articulado", price: "R$ 44,90", category: "infantil", sub: "", icon: "fa-robot", tag: "novo", ativo: true, img: "" },

  // ===== ESCRITÓRIO (10 produtos) =====
  { id: 71, name: "Organizador de Canetas", desc: "6 compartimentos", price: "R$ 29,90", category: "escritorio", sub: "", icon: "fa-pen", tag: "", ativo: true, img: "" },
  { id: 72, name: "Organizador de Mesa", desc: "com gaveta", price: "R$ 49,90", category: "escritorio", sub: "", icon: "fa-drawer", tag: "destaque", ativo: true, img: "" },
  { id: 73, name: "Suporte para Caneca", desc: "com nome", price: "R$ 24,90", category: "escritorio", sub: "", icon: "fa-mug-hot", tag: "", ativo: true, img: "" },
  { id: 74, name: "Porta-canetas", desc: "design moderno", price: "R$ 19,90", category: "escritorio", sub: "", icon: "fa-pen", tag: "", ativo: true, img: "" },
  { id: 75, name: "Organizador de Documentos", desc: "3 divisórias", price: "R$ 34,90", category: "escritorio", sub: "", icon: "fa-file", tag: "", ativo: true, img: "" },
  { id: 76, name: "Suporte para Café", desc: "com aquecimento", price: "R$ 44,90", category: "escritorio", sub: "", icon: "fa-coffee", tag: "novo", ativo: true, img: "" },
  { id: 77, name: "Porta-lápis", desc: "com 5 furos", price: "R$ 16,90", category: "escritorio", sub: "", icon: "fa-pencil", tag: "", ativo: true, img: "" },
  { id: 78, name: "Organizador de Escrivaninha", desc: "compartimentos", price: "R$ 39,90", category: "escritorio", sub: "", icon: "fa-draw-polygon", tag: "", ativo: true, img: "" },
  { id: 79, name: "Porta-celular", desc: "com carregador", price: "R$ 39,90", category: "escritorio", sub: "", icon: "fa-mobile-screen", tag: "destaque", ativo: true, img: "" },
  { id: 80, name: "Organizador de Fones", desc: "com fio", price: "R$ 24,90", category: "escritorio", sub: "", icon: "fa-headphones", tag: "novo", ativo: true, img: "" },

  // ===== ACESSÓRIOS (10 produtos) =====
  { id: 81, name: "Suporte para Relógio", desc: "mesa, 3D", price: "R$ 29,90", category: "acessorios", sub: "", icon: "fa-clock", tag: "", ativo: true, img: "" },
  { id: 82, name: "Porta-joias", desc: "colar, anéis", price: "R$ 39,90", category: "acessorios", sub: "", icon: "fa-gem", tag: "destaque", ativo: true, img: "" },
  { id: 83, name: "Suporte para Óculos", desc: "mesa", price: "R$ 24,90", category: "acessorios", sub: "", icon: "fa-glasses", tag: "promo", ativo: true, img: "" },
  { id: 84, name: "Porta-chaves de Parede", desc: "5 ganchos", price: "R$ 29,90", category: "acessorios", sub: "", icon: "fa-key", tag: "promo", ativo: true, img: "" },
  { id: 85, name: "Organizador de Tênis", desc: "2 pares", price: "R$ 44,90", category: "acessorios", sub: "", icon: "fa-shoe-prints", tag: "destaque", ativo: true, img: "" },
  { id: 86, name: "Organizador de Cabos", desc: "mesa, 3D", price: "R$ 19,90", category: "acessorios", sub: "", icon: "fa-plug", tag: "", ativo: true, img: "" },
  { id: 87, name: "Organizador de Maquiagem", desc: "compartimentos", price: "R$ 49,90", category: "acessorios", sub: "", icon: "fa-paint-brush", tag: "novo", ativo: true, img: "" },
  { id: 88, name: "Organizador de Perfumes", desc: "3D, 6 frascos", price: "R$ 39,90", category: "acessorios", sub: "", icon: "fa-spray-can", tag: "", ativo: true, img: "" },
  { id: 89, name: "Porta-cartão de Visita", desc: "mesa, 3D", price: "R$ 16,90", category: "acessorios", sub: "", icon: "fa-id-card", tag: "destaque", ativo: true, img: "" },
  { id: 90, name: "Suporte para Bolsa", desc: "mesa, 3D", price: "R$ 39,90", category: "acessorios", sub: "", icon: "fa-bag", tag: "", ativo: true, img: "" },
];

// Filtra apenas produtos ativos
const PRODUTOS_ATIVOS = PRODUTOS.filter(p => p.ativo !== false);

console.log(`📦 ${PRODUTOS_ATIVOS.length} produtos carregados`);