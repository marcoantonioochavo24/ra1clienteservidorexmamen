document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const contenedor = document.getElementById('producto');

  // Compruebo si hay un id en la URL
  if (!id) {
    contenedor.innerHTML = '<p class="text-center text-danger">Producto no encontrado</p>';
    return;
  }
  // Obtengo todos los productos y busco el que tenga el id
  const productos = await obtenerProductos();
  const producto = productos.find(p => p.id == id);
  // Si no se encuentra el producto, mensaje de error
  if (!producto) {
    contenedor.innerHTML = '<p class="text-center text-danger">Producto no encontrado</p>';
    return;
  }
  // Si lo encuentra, lo muestra
  contenedor.innerHTML = `
    <div class="card mx-auto shadow" style="max-width: 500px;">
      <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body text-center">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-text">${producto.descripcion}</p>
        <h4 class="text-success">${producto.precio.toFixed(2)} €</h4>
        <button id="agregar" class="btn btn-success mt-3">Añadir al carrito 🛒</button>
      </div>
    </div>
  `;

  document.getElementById('agregar').addEventListener('click', () => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`"${producto.nombre}" añadido al carrito 🛒`);
  });
});

