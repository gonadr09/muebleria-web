const fetchData = async () => {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=$sillones`);
    const response = await data.json();
    console.log(response)
}