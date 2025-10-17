// Act3. Mostrar solo tres productos pagina inicio
document.addEventListener("DOMContentLoaded", async () => {
    // Contenedor donde van los productos
    const contenedor = document.getElementById("contenedor-inicio");
    // Llamo a función que obtiene todos los produc
    const productos = await obtenerProductos();
    // Muestro productos
    productos.slice(0, 3).forEach(p => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        // Contenido tarj
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
})