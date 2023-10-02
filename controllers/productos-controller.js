import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProducto = (nombre, precio, imagen, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${imagen}" alt="img">
            <h1 class="product-name"> ${nombre} </h1>
            <p class="precio">${formatPrice(precio)}</p>
            <a class="ver-producto" href="../produto.html?id=${id}">Ver Producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(
          elemento.nombre,
          elemento.precio,
          elemento.imagen,
          elemento.id
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();
