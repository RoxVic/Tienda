const section = document.querySelector("section");

const requestURL = "https://fakestoreapi.com/products";

const request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const productos = request.response;
  pintarProductos(productos);
};

function pintarProductos(productos) {
  for (const producto of productos) {
    // Crear columna para grid responsive
    const col = document.createElement("div");
    col.className = "col";

    // Crear card
    const card = document.createElement("div");
    card.className = "card h-100"; // h-100 para que las cards tengan igual alto

    // Imagen
    const img = document.createElement("img");
    img.src = producto.image;
    img.alt = producto.title;
    img.className = "card-img-top";
    card.appendChild(img);

    // Cuerpo de la card
    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    // Título
    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = producto.title;
    cardBody.appendChild(titulo);

    // Descripción (opcional corta para que no ocupe mucho)
    const desc = document.createElement("p");
    desc.className = "card-text";
    desc.textContent = producto.description.length > 100
      ? producto.description.substring(0, 100) + "..."
      : producto.description;
    cardBody.appendChild(desc);

    // Precio destacado
    const precio = document.createElement("p");
    precio.className = "text-danger fw-bold mt-auto"; // mt-auto para que el botón quede abajo
    precio.textContent = `$${producto.price}`;
    cardBody.appendChild(precio);

    // Botón comprar
    const botonComprar = document.createElement("a");
    botonComprar.className = "btn btn-primary";
    botonComprar.href = "#";
    botonComprar.textContent = "Comprar";
    cardBody.appendChild(botonComprar);

    card.appendChild(cardBody);
    col.appendChild(card);
    section.appendChild(col);
  }
}
