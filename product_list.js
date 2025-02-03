const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json()) //then(så) henter den gyldig data som er jsonfil
  .then((data) => showList(data)); //then (så) kaldes funktionen og dataen/produkterne fetches og benyttes i følgende functions skriv

function showList(products) {
  //data er ændret til products fordi vi har hentet datean og nu skal vi benyttes produktdataen fra dataen
  console.log(products);
  const markup = products
    .map(
      //products.map for hvert produkt (product =>) puttes et nyt produkt ind i variablen markup
      (product) => `
       <div class="card">
            <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="blå trøje">
                <h2>${product.productdisplayname}</h2>
            </a>
            <p class="catgtekst">${product.articletype} | ${product.brandname}</p>
            <p>DKK ${product.price},-</p>
            <a href="product.html">
                <p class="underline">Read more</p>
            </a>
        </div>
      `
    )

    .join(""); // mellem listerne(array) er der komma, vha join vil der ikke være komma længere.
  console.log(markup);
  productContainer.innerHTML = markup;
}
