// Datos de productos generales
const products = [
  {
    id: 1,
    name: "Cortadora de pasto",
    price: "$25.000",
    images: ["images/IMG_9411.jpg", "images/IMG_9412.jpg"],
    description: "Cortadora de pasto semi nueva, en buen estado y con filo funcional.",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 2,
    name: "Tocador",
    price: "$50.000",
    images: ["images/IMG_9366.jpg"],
    description: "Tocador de madera con 5 cajones, tiradores de bronce y espejo",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 3,
    name: "Soporte de manguera",
    price: "$10.000",
    images: ["images/IMG_9414.jpg"],
    description: "Manguera de jardín con soporte enrollador, lista para usar.",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 4,
    name: "Cilindro 15kg",
    price: "$30.000",
    images: ["images/IMG_9356.jpg"],
    description: "",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 5,
    name: "Cilindro 11kg",
    price: "$20.000",
    images: ["images/IMG_9359.jpg"],
    description: "",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 6,
    name: "Cilindro 5kg",
    price: "$15.000",
    images: ["images/IMG_9358.jpg"],
    description: "",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 7,
    name: "Faroles",
    price: "$15.000",
    images: ["images/Faroles.jpg"],
    description: "Faroles: Uno con todos los vidrios completos y otro con un solo vidrio. Ambos por $15.000",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 8,
    name: "Cuadro creación de Adán",
    price: "$15.000",
    images: ["images/Creacion_adan.jpg"],
    description: "Detalle en el borde del cuadro, marca de humedad",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 9,
    name: "2 Muebles de almacenaje",
    price: "$50.000",
    images: ["images/Mueble_ruedas.jpg","images/Mueble_ruedas_back.jpg","images/Mueble_ruedas_dentro.jpg"],
    description: "Práctico mueble bajo con ruedas, ideal para oficina, dormitorio o sala de estar. Perfecto para guardar documentos, utensilios u otros objetos, y moverlo fácilmente gracias a sus ruedas.\n\nCaracterísticas:\n- Color madera tono caoba.\n- 2 puertas con tiradores metálicos.\n- Con ruedas para fácil desplazamiento.\n- Buen estado general (detalle menor por uso normal).\n\nMedidas:\n- Ancho: 85 cm\n- Alto: 45 cm\n- Profundidad: 37 cm",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 10,
    name: "Mueble de entrada",
    price: "$15.000",
    images: ["images/Mueble_entrada.jpg"],
    description: "",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 11,
    name: "Estufa pequeña Somela",
    price: "$25.000",
    images: ["images/Estufa_somela.jpg","images/Estufa_somela_back.jpg"],
    description: "Estufa Somela pequeña, ideal para espacios reducidos. A pesar de tener varios años de uso, funciona correctamente y entrega buen rendimiento.\n\nCaracterísticas:\n- Marca: Somela.\n- Tamaño compacto, fácil de ubicar en distintos ambientes.\n- Funciona sin problemas.\n- Presenta detalles estéticos por antigüedad: rayones, marcas de uso y desgaste normal",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 12,
    name: "Escritorio con repisas",
    price: "$40.000",
    images: ["images/Escritorio_repisas.jpg","images/Escritorio_repisas_2.jpg","images/Escritorio_repisas_3.jpg","images/Escritorio_repisas_4.jpg","images/Escritorio_repisas_5.jpg","images/Escritorio_repisas_6.jpg"],
    description: "Escritorio con repisas y dos cajones, ideal para guardar diferentes objetos, libros o artículos.\n\nMedidas:\n- Alto: 1,75 m\n- Ancho: 1,00 m",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 13,
    name: "Congeladora Haier",
    price: "$65.000",
    images: ["images/IMG_9372.png","images/IMG_9373.jpg"],
    description: "Congeladora Haier con termostato regulado, excelente para mantener tus bebidas o productos fríos.\n\nDetalles:\n- Raspones o hendiduras pequeñas sutiles por uso.\n- Todo lo demás funciona perfectamente.",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 14,
    name: "Mesa de apoyo con repisa de vidrio",
    price: "$65.000",
    images: ["images/Mesa_apoyo.jpg","images/Mesa_apoyo_2.jpg"],
    description: "\nDetalles:\n- Algunos rayones leves en la superficie por desgaste.\n- El resto en perfecto estado.\n\nMedidas:\n- Alto: 85 cm\n- Largo: 108 cm\n- Profundidad: 34 cm",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 15,
    name: "Mesa de centro",
    price: "$65.000",
    images: ["images/Mesa_centro_a.jpg","images/Mesa_centro.jpg","images/Mesa_centro_2.jpg","images/Mesa_centro_3.jpg"],
    description: "Mesa de centro de madera con diseño clásico y elegante. La cubierta presenta un acabado brillante con diseño geométrico en vetas, aportando un estilo sofisticado al mueble.\n\nCaracterísticas:\n- Material: madera.\n- Diseño rectangular con bordes curvos.\n- Cubierta con patrón geométrico en la veta.\n- Acabado en tonos marrón.\n\nEstado:\n- Usada, con detalles de desgaste y rayones visibles en la superficie y en las patas.\n- Estructuralmente firme.\n\nIdeal para sala de estar o living, con un toque vintage y distinguido.\n\n Medidas\n\n- Largo: 1.20cm\n-Alto: 50cm \n-Ancho:72cm ",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 16,
    name: "Adorno decorativo",
    price: "$10.000",
    images: ["images/Adorno.jpg"],
    description: "Adorno decorativo rústico compuesto por una bandeja alargada con tres esferas en su interior. Las esferas presentan un diseño en tonos blanco y negro con banda de cuerda natural alrededor.\n\nCaracterísticas:\n- Estilo artesanal/rústico.\n- Bandeja alargada en tono claro.\n- 3 esferas decorativas (2 negras, 1 blanca) con detalle de cuerda.\n- Ideal para centro de mesa, repisa o decoración de sala.\nEstado:\n- Usado, con leves detalles por el tiempo.\n- Buen estado general.",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 17,
    name: "Jarrones decorativos",
    price: "$10.000",
    images: ["images/Jarrones.jpg"],
    description: "Par de jarrones decorativos de metal con diseño de mariposa en tonos tierra. Estilo rústico/vintage, con asa curva y boca inclinada.\n\nCaracterísticas:\n- Diseño floral con mariposa.\n- Acabado envejecido.\n- Ideal para decoración de interiores.\n\nEstado:\n- Usados, en buen estado general.",
    whatsapp: "+56992925684",
    sold: true
  }
];

// Datos de videojuegos (separado)
const videogames = [
  // PS3
  {
    id: 100,
    name: "Uncharted",
    price: "$5.000",
    images: ["images/Uncharted.jpg","images/Uncharted_d.jpg","images/Uncharted_a.jpg"],
    description: "Aventura de acción con exploración, tiroteos y tesoros ocultos",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps3"
  },
  {
    id: 101,
    name: "Uncharted 2",
    price: "$5.000",
    images: ["images/Uncharted_2.jpg","images/Uncharted_2d.jpg","images/Uncharted_2a.jpg"],
    description: "Nathan Drake busca la legendaria ciudad Shambhala mientras entrena traiciones y enemigos mortales.",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps3"
  },
  {
    id: 102,
    name: "Uncharted 3",
    price: "$5.000",
    images: ["images/Uncharted_3.jpg","images/Uncharted_3d.jpg","images/Uncharted_3a.jpg"],
    description: "Nathan Drake persigue la legendaria ciudad perdida de Ubar , enfrentando a una misteriosa organización y su propio pasado.",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps3"
  },
  {
    id: 200,
    name: "Dragon Ball Raging Blast 2",
    price: "$5.000",
    images: ["images/DBZ.jpg","images/DBZ_d.jpg","images/DBZ_a.jpg"],
    description: "Juego de peleas en 3D con mas de 90 personajes de la saga Dragon ball",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps3"
  },
  {
    id: 201,
    name: "GTA IV",
    price: "$5.000",
    images: ["images/Gta4.jpg","images/Gta4_d.jpg","images/Gta_4a.jpg"],
    description: "Mundo abierto Libery City con accion, historia intensa y total libertad.",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps3"
  },
  {
    id: 202,
    name: "Fifa 14",
    price: "$5.000",
    images: ["images/Fifa14.jpg","images/Fifa14_d.jpg","images/Fifa14_a.jpg"],
    description: "Juego de futbol con licencias oficiales, modos variados y jugabilidad realista.",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps3"
  },
  {
    id: 203,
    name: "Uncharted 4",
    price: "$10.000",
    images: ["images/Uncharted_4.jpg","images/Uncharted_4d.jpg","images/Uncharted_4a.jpg"],
    description: "Nathan Drake regresa para una ultima aventura tras la pista de un tesoro pirata, enfrentando a viejos rivales.",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps4"
  },
  {
    id: 204,
    name: "Call of duty black ops 3",
    price: "$10.000",
    images: ["images/Bo3.jpg","images/Bo3_d.jpg","images/Bo3_a.jpg"],
    description: "shooter con campaña, modo multijugador y operaciones cooperativas seguidilla del Black ops 2",
    whatsapp: "+56992925684",
    sold: false,
    console: "ps4"
  }
];

let currentProductIndex = -1;
let currentImageIndex = 0;
let currentCategory = 'products';
let currentFilter = 'all';
let currentDataSource = products;


// ================== CAMBIAR CATEGORÍA ==================
function changeCategory(category) {
  currentCategory = category;
  currentFilter = 'all';

  // Actualizar botones de categoría
  document.querySelectorAll('.btn-category').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Actualizar botón de ubicación según categoría
  const locationBtn = document.getElementById('locationBtn');
  if (category === 'videogames') {
    // 📍 Estación Ñuble - Metro de Santiago (L5 y L6), Ñuñoa
    locationBtn.href = 'https://www.google.com/maps/search/Estaci%C3%B3n+%C3%91uble,+Santiago';
    locationBtn.innerHTML = '📍 Estación Ñuble - Entrega aquí';
  } else {
    locationBtn.href = 'https://www.google.com/maps/place/Ñuble+1034,+Santiago,+Región+Metropolitana,+Chile';
    locationBtn.innerHTML = '📍 ¿Dónde nos ubicamos?';
  }

  // Mostrar/ocultar filtros según categoría
  if (category === 'products') {
    document.getElementById('filtersProducts').style.display = 'flex';
    document.getElementById('filtersVideogames').style.display = 'none';
    currentDataSource = products;
  } else {
    document.getElementById('filtersProducts').style.display = 'none';
    document.getElementById('filtersVideogames').style.display = 'flex';
    currentDataSource = videogames;
  }

  // Resetear filtros activos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`#filters${category === 'products' ? 'Products' : 'Videogames'} .filter-btn`).classList.add('active');

  renderProducts();
}

// ================== FILTROS PRODUCTOS ==================
function filterProducts(filter) {
  currentFilter = filter;
  currentDataSource = products;
  
  document.querySelectorAll('#filtersProducts .filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  renderProducts();
}

// ================== FILTROS VIDEOJUEGOS ==================
function filterVideogames(filter) {
  currentFilter = filter;
  currentDataSource = videogames;
  
  document.querySelectorAll('#filtersVideogames .filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  renderProducts();
}

// ================== RENDERIZAR ==================
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
});

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  
  let filteredData = currentDataSource;
  
  // Aplicar filtros
  if (currentCategory === 'videogames') {
    if (currentFilter === 'ps3') {
      filteredData = videogames.filter(game => game.console === 'ps3');
    } else if (currentFilter === 'ps4') {
      filteredData = videogames.filter(game => game.console === 'ps4');
    } else if (currentFilter === 'available') {
      filteredData = videogames.filter(game => !game.sold);
    } else if (currentFilter === 'sold') {
      filteredData = videogames.filter(game => game.sold);
    }
  } else {
    if (currentFilter === 'available') {
      filteredData = products.filter(product => !product.sold);
    } else if (currentFilter === 'sold') {
      filteredData = products.filter(product => product.sold);
    }
  }
  
  updateProductsCounter(filteredData.length);
  
  filteredData.forEach((item, index) => {
    const originalIndex = currentDataSource.findIndex(p => p.id === item.id);
    
    const card = document.createElement('div');
    card.className = `product-card ${item.sold ? 'sold' : ''}`;
    card.onclick = () => openModal(originalIndex);
    
    const estadoClass = item.sold ? 'vendido' : 'disponible';
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${item.images[0]}" alt="${item.name}">
        <div class="estado ${estadoClass}">
          ${item.sold ? 'VENDIDO' : 'DISPONIBLE'}
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${item.name}</div>
        <div class="product-price">${item.price}</div>
        <div class="product-description">${item.description.substring(0,100)}${item.description.length > 100 ? '...' : ''}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  if (filteredData.length === 0) {
    const noProducts = document.createElement('div');
    noProducts.className = 'no-products';
    noProducts.innerHTML = `
      <div class="no-products-message">
        <h3>😕 No hay ${currentCategory === 'videogames' ? 'videojuegos' : 'productos'} en esta categoría</h3>
        <p>Prueba con otro filtro</p>
      </div>
    `;
    grid.appendChild(noProducts);
  }
}

function updateProductsCounter(count) {
  const counterId = currentCategory === 'products' ? 'productsCounter' : 'videogamesCounter';
  const counter = document.getElementById(counterId);
  if (counter) {
    let message = `Mostrando ${count} ${currentCategory === 'videogames' ? 'juego' : 'producto'}${count !== 1 ? 's' : ''}`;
    counter.textContent = message;
  }
}

// ================== MODAL ==================
function openModal(index) {
  currentProductIndex = index;
  currentImageIndex = 0;
  const item = currentDataSource[index];
  
  showImage(item.images[currentImageIndex]);
  
  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalPrice').textContent = item.price;

  const modalDescription = document.getElementById('modalDescription');
  modalDescription.innerHTML = formatDescription(item.description);

  const thumbnails = document.getElementById('modalThumbnails');
  thumbnails.innerHTML = '';
  item.images.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.classList.toggle('active', i === 0);
    thumb.onclick = () => {
      currentImageIndex = i;
      showImage(item.images[currentImageIndex]);
    };
    thumbnails.appendChild(thumb);
  });
  
  const actions = document.getElementById('modalActions');
  if (item.sold) {
    actions.innerHTML = `
      <div class="sold-message">
        ❌ Este producto ya fue vendido
      </div>
    `;
  } else {
    actions.innerHTML = `
      <a href="https://wa.me/${item.whatsapp.replace('+', '')}?text=Hola! Me interesa el producto: ${item.name} - ${item.price}" 
         class="btn btn-whatsapp" target="_blank">
        💬 Comprar por WhatsApp
      </a>
    `;
  }
  
  const modalContent = document.querySelector('.modal-content');
  if (item.sold) {
    modalContent.classList.add('sold');
  } else {
    modalContent.classList.remove('sold');
  }
  
  document.getElementById('productModal').style.display = 'block';
}

function formatDescription(text) {
  if (!text) return '<p>Sin descripción disponible.</p>';
  
  text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  
  lines.forEach(line => {
    line = line.trim();
    if (line.startsWith('-')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${line.substring(1).trim()}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      if (line) html += `<p>${line}</p>`;
    }
  });
  
  if (inList) html += '</ul>';
  return html;
}

function showImage(src) {
  const modalImg = document.getElementById('modalImage');
  modalImg.src = src;
  
  const item = currentDataSource[currentProductIndex];
  modalImg.classList.toggle('sold', item.sold);
  
  const thumbs = document.querySelectorAll('#modalThumbnails img');
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentImageIndex);
  });
}

function prevImage() {
  const item = currentDataSource[currentProductIndex];
  currentImageIndex = (currentImageIndex - 1 + item.images.length) % item.images.length;
  showImage(item.images[currentImageIndex]);
}

function nextImage() {
  const item = currentDataSource[currentProductIndex];
  currentImageIndex = (currentImageIndex + 1) % item.images.length;
  showImage(item.images[currentImageIndex]);
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}