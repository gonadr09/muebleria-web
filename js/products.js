const fetchData = async () => {
  const data = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=$sofa`
  );
  const response = await data.json();
  return response;
};

const renderProducts = async () => {
  const dataProducts = await fetchData();
  console.log(dataProducts);

  if (dataProducts) {
    const container = document.querySelector(".products__products");
    const seeProductsButton = document.querySelector("#see_products_button");

    const seeProducts = () => {
      container.innerHTML = "<h3 class='products_subtitle'>Productos</h3>";
      const ul = document.createElement("ul");
      ul.classList.add("products__ul");
      for (let i = 0; i < 12; i++) {
        const li = document.createElement("li");
        li.classList.add("products__li");
        const dataProduct = dataProducts.results[i];
        const titleProduct = dataProduct.title;
        const imgProduct = dataProduct.thumbnail;
        const priceProduct = dataProduct.price;
        li.innerHTML = `<div class="div__products">
                                    <img src="${imgProduct}">
                                    <h3>$ ${priceProduct}</h3>
                                    <p class="rojo" >${titleProduct}</p>
                                </div>`;
        ul.appendChild(li);
      }
      container.appendChild(ul);
      seeProductsButton.removeEventListener("click", seeProducts);
    };

    seeProductsButton.addEventListener("click", seeProducts);
  }
};

renderProducts();

//prueba creación elementos desde JS

/* const mielemento = document.createElement('div')
mielemento.classList.add('rojo')
const primer_seccion = document.querySelector('.hero__container')


mielemento.innerHTML = '<p>mi elemento p dentro de un div desde js</p>'
const elemento_p = document.createElement('p')
elemento_p.innerText = 'mi elemento con create element'
mielemento.appendChild(elemento_p)

primer_seccion.appendChild(mielemento) */
