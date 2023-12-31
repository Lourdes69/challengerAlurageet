//GET
const listaProductos = () =>
  fetch("http://localhost:3000/producto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

//POST
const creaProdutos = (nombre, imagen, precio) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      imagen,
      precio,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fué posible crear un producto");
  });
};

// PUT/PATCH
const alteraProducto = async (id, nombre, precio,) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      precio,
      id,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProducto,
  creaProdutos,
  alteraProducto,
  deleteProducto,
};


 