const fetchData = async (searchQuery) => {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
    const response = await data.json();
    setProducts(response.results);
    setFilteredProducts(response.results);
}