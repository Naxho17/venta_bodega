// Datos de productos
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
    sold: false
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
    sold: false
  },
  {
    id: 8,
    name: "Cuadro creación de Adán",
    price: "$15.000",
    images: ["images/Creacion_adan.jpg"],
    description: "Detalle en el borde del cuadro, marca de humedad",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 9,
    name: "Mueble de almacenaje",
    price: "$50.000",
    images: ["images/Mueble_ruedas.jpg","images/Mueble_ruedas_back.jpg","images/Mueble_ruedas_dentro.jpg"],
    "description": "Práctico mueble bajo con ruedas, ideal para oficina, dormitorio o sala de estar. Perfecto para guardar documentos, utensilios u otros objetos, y moverlo fácilmente gracias a sus ruedas.\n\nCaracterísticas:\n- Color madera tono caoba.\n- 2 puertas con tiradores metálicos.\n- Con ruedas para fácil desplazamiento.\n- Buen estado general (detalle menor por uso normal).\n\nMedidas:\n- Ancho: 85 cm\n- Alto: 45 cm\n- Profundidad: 37 cm",
    whatsapp: "+56992925684",
    sold: false
  },
  
  {
    id: 10,
    name: "Mueble de entrada",
    price: "$15.000",
    images: ["images/Mueble_entrada.JPG"],
    description: "",
    whatsapp: "+56992925684",
    sold: true
  },
  {
    id: 11,
    name: "Estufa pequeña Somela",
    price: "$25.000",
    images: ["images/Estufa_somela.jpg","images/Estufa_somela_back.jpg"],
    description: "",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 12,
    name: "Escritorio con repisas",
    price: "$40.000",
    images: ["images/Escritorio_repisas.jpg","images/Escritorio_repisas_2.jpg","images/Escritorio_repisas_3.jpg","images/Escritorio_repisas_4.jpg","images/Escritorio_repisas_5.jpg","images/Escritorio_repisas_6.jpg"],
    "description": "Escritorio con repisas y dos cajones, ideal para guardar diferentes objetos, libros o artículos.\n\nMedidas:\n- Alto: 1,75 m\n- Ancho: 1,00 m",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 13,
    name: "Congeladora Haier",
    price: "$65.000",
    images: ["images/IMG_9372.png","images/IMG_9373.jpg"],
    "description": "Congeladora Haier con termostato regulado, excelente para mantener tus bebidas o productos fríos.\n\nDetalles:\n- Raspones o hendiduras pequeñas sutiles por uso.\n- Todo lo demás funciona perfectamente.",
    whatsapp: "+56992925684",
    sold: false
  },
  {
    id: 14,
    name: "Mesa de apoyo con repisa de vidrio",
    price: "$65.000",
    images: ["images/Mesa_apoyo.jpg","images/Mesa_apoyo_2.jpg"],
    "description": "\nDetalles:\n- Algunos rayones leves en la superficie por desgaste.\n- El resto en perfecto estado.\n\nMedidas:\n- Alto: 85 cm\n- Largo: 108 cm\n- Profundidad: 34 cm",
    whatsapp: "+56992925684",
    sold: false
  },
];

let currentProductIndex = -1;
let currentImageIndex = 0;
let currentFilter = 'all'; // Filtro actual

// ================== FILTROS ==================
function filterProducts(filter) {
  currentFilter = filter;
  
  // Actualizar botones activos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Renderizar productos filtrados
  renderProducts();
}

// ================== PRODUCTOS ==================
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
});

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  
  // Filtrar productos según el filtro actual
  let filteredProducts = products;
  switch(currentFilter) {
    case 'available':
      filteredProducts = products.filter(product => !product.sold);
      break;
    case 'sold':
      filteredProducts = products.filter(product => product.sold);
      break;
    default: // 'all'
      filteredProducts = products;
  }
  
  // Actualizar contador
  updateProductsCounter(filteredProducts.length);
  
  filteredProducts.forEach((product, index) => {
    // Buscar el índice original del producto
    const originalIndex = products.findIndex(p => p.id === product.id);
    
    const card = document.createElement('div');
    card.className = `product-card ${product.sold ? 'sold' : ''}`;
    card.onclick = () => openModal(originalIndex);
    
    const estadoClass = product.sold ? 'vendido' : 'disponible';
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
        <div class="estado ${estadoClass}">
          ${product.sold ? 'VENDIDO' : 'DISPONIBLE'}
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <div class="product-description">${product.description.substring(0,100)}...</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Mostrar mensaje si no hay productos
  if (filteredProducts.length === 0) {
    const noProducts = document.createElement('div');
    noProducts.className = 'no-products';
    noProducts.innerHTML = `
      <div class="no-products-message">
        <h3>😕 No hay productos ${currentFilter === 'available' ? 'disponibles' : 'vendidos'}</h3>
        <p>Prueba con otro filtro para ver más productos</p>
      </div>
    `;
    grid.appendChild(noProducts);
  }
}

function updateProductsCounter(count) {
  const counter = document.getElementById('productsCounter');
  if (counter) {
    let message = `Mostrando ${count} producto${count !== 1 ? 's' : ''}`;
    if (currentFilter === 'available') {
      message += ' disponible' + (count !== 1 ? 's' : '');
    } else if (currentFilter === 'sold') {
      message += ' vendido' + (count !== 1 ? 's' : '');
    }
    counter.textContent = message;
  }
}

// ================== MODAL ==================
// ================== MODAL MEJORADO ==================
function openModal(index) {
  currentProductIndex = index;
  currentImageIndex = 0;
  const product = products[index];
  
  showImage(product.images[currentImageIndex]);
  
  // Nombre y precio
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = product.price;

  // Descripción con soporte para saltos de línea y listas
  const modalDescription = document.getElementById('modalDescription');
  modalDescription.innerHTML = formatDescription(product.description);

  // Thumbnails
  const thumbnails = document.getElementById('modalThumbnails');
  thumbnails.innerHTML = '';
  product.images.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.classList.toggle('active', i === 0);
    thumb.onclick = () => {
      currentImageIndex = i;
      showImage(product.images[currentImageIndex]);
    };
    thumbnails.appendChild(thumb);
  });
  
  // Botón de WhatsApp
  const actions = document.getElementById('modalActions');
  actions.innerHTML = `
    <a href="https://wa.me/${product.whatsapp.replace('+', '')}?text=Hola! Me interesa el producto: ${product.name} - ${product.price}" 
       class="btn btn-whatsapp" target="_blank">
      💬 Comprar por WhatsApp
    </a>
  `;
  
  // Clase sold para modal
  const modalContent = document.querySelector('.modal-content');
  if (product.sold) {
    modalContent.classList.add('sold');
  } else {
    modalContent.classList.remove('sold');
  }
  
  document.getElementById('productModal').style.display = 'block';
}

// Función que transforma la descripción en HTML con listas
function formatDescription(text) {
  if (!text) return '<p>Sin descripción disponible.</p>';
  
  // Escapar HTML por seguridad
  text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  // Separar líneas
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
  
  const product = products[currentProductIndex];
  modalImg.classList.toggle('sold', product.sold);
  
  const thumbs = document.querySelectorAll('#modalThumbnails img');
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentImageIndex);
  });
}

function prevImage() {
  const product = products[currentProductIndex];
  currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
  showImage(product.images[currentImageIndex]);
}

function nextImage() {
  const product = products[currentProductIndex];
  currentImageIndex = (currentImageIndex + 1) % product.images.length;
  showImage(product.images[currentImageIndex]);
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}