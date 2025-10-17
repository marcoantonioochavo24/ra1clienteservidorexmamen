document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('contenedor-productos');
  const productos = await obtenerProductos();

  productos.forEach(p => {
    const card = document.createElement('div');
    card.className = "col-md-4";

    // Act2. Mejorar interfaz productos
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
      <img src = "${p.img}" class = "card-img-top" alt= "${p.nombre}">
      <div class = "card-body text-center">
      <h5 class = "card-title"> ${p.nombre} </h5>
      <p class = "card-text text-muted"> ${p.categoria} </p>
      <p class = "card-text"> ${p.descripcion} </p>
      <a href="producto.html?id = ${p.id} "class = "btn btn-primary"> Ver detalle </a>
      </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
});

// En el archvio productos.js he añadido la img y cat dentro de cada tarjeta con json 
// Y clases de bootstrap como card-img ... para mant estilo


// Act1. Cambio estilo tarjetas de producto

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card"); // Seleciono todas las tarjetas
  // Cambio color del fondo y borde
  cards.forEach(card => {
    card.style.backgroundColor = "#f8f9fa"; // fondo claro
    card.style.border = "1px solid #ccc"; // borde gris claro
  });
  // Cambio color titulos
  const titles = document.querySelectorAll(".card-title");
  titles.forEach(t => {
    t.style.color = "#007bff"; // azul bootstrap
    t.style.fontWeight = "bold";
  });
  // Cambio el tamaño texto
  const texts = document.querySelectorAll(".card-text");
  texts.forEach (p => {
    p.style.fontSize = "1.1rem"; // tamaño mas grande
  });
});

// Basicamente he usado el querySelectorAll para coger las tarejtas
// y he cambiado el fondo, borde, color t y tamaño para que no sea igual
 









