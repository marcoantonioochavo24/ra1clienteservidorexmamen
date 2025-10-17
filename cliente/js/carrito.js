document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('carrito');
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (carrito.length === 0) {
    contenedor.innerHTML = '<div class="alert alert-info text-center">No hay productos en el carrito.</div>';
  } else {
    let total = 0;
    carrito.forEach(p => {
      total += p.precio;
      contenedor.innerHTML += `
        <div class="card mb-3 p-3 shadow-sm">
          <h5>${p.nombre}</h5>
          <p>${p.precio.toFixed(2)} €</p>
        </div>
      `;
    });

    contenedor.innerHTML += `
      <div class="alert alert-success fw-bold text-center">
        Total: ${total.toFixed(2)} €
      </div>
    `;
  }

  document.getElementById('vaciar').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    window.location.reload();
  });
});

// Act.4 Mostrar cantidad de productos en el carrito 
const textoCarrito = document.getElementById8("texto-carrito");
// Por si no está en todas las pag
if (textoCarrito) {
  const cantidad = carrito.lenght;
  textoCarrito.textContent = `Carrito (${cantidad})`;
}

// Basicamente he añadido un contador para actualizar el numero
// de productos dentro del texto"carrito"