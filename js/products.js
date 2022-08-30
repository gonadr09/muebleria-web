const fetchData = async () => {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=$sillones`)
    const response = await data.json()
    return response
}

const renderProducts = async () => {
    const dataProducts = await fetchData()
    console.log(dataProducts)
    
    if(dataProducts){
        const container = document.querySelector('.products__products')
        const seeProductsButton = document.querySelector('#see_products_button')

        seeProductsButton.addEventListener('click', () => {
            container.innerHTML = ""
            const ul = document.createElement('ul')
            for(let i = 0; i < 9; i++){
                const li = document.createElement('li')
                const dataProduct = dataProducts.results[i]
                const titleProduct = dataProduct.title
                const imgProduct = dataProduct.thumbnail
                const priceProduct = dataProduct.price
                li.innerHTML = `<h3>${titleProduct}</h3>
                                <img src="${imgProduct}">
                                <p>$ ${priceProduct}</p>
                                `
                ul.appendChild(li);
            }
            container.appendChild(ul)
        })
    }
}

renderProducts()