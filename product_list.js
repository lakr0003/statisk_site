const myCategory = new URLSearchParams(window.location.search).get("category");
const productContainer = document.querySelector(".product_list_container");

document.querySelector(".category_title").textContent = `${myCategory}`;
document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

let allData;
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showList(allData);
  });

function showFiltered() {
  const filter = this.dataset.gender;
  if (filter == "All") {
    showList(allData);
  } else {
    fraction = allData.filter((product) => product.gender === filter);
    showList(fraction);
  }
}

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json()) //then(så) henter den gyldig data som er jsonfil
  .then((data) => showList(data)); //then (så) kaldes funktionen og dataen/produkterne fetches og benyttes i følgende functions skriv

function showList(products) {
  //data er ændret til products fordi vi har hentet datean og nu skal vi benyttes produktdataen fra dataen
  console.log(products);
  const markup = products
    .map(
      //products.map for hvert produkt (product =>) puttes et nyt produkt ind i variablen markup
      (product) => `
       <div class="card" >
            <a href="product.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produktbillede">
                <h2>${product.productdisplayname}</h2>

            <div class="soldout ${product.soldout && "yesSoldout"}">
                <p>SOLD OUT</p>
            </div> 
            </a>

            <p class="catgtekst">${product.articletype} | ${product.brandname}</p>
        <div>
            <p class=" ${product.discount && "disctekst"}">DKK ${product.price},-</p>
            <p class="tilbud ${product.discount && "yesDiscount"}"> NOW DKK ${Math.floor(product.price - (product.price * product.discount) / 100)},-</p>
          </div>
             <div class="discount ${product.discount && "yesDiscount"}">
                <p>${product.discount}%</p>
            </div>

            <a href="product.html?id=${product.id}">
                <p class="underline">Read more </p>
            </a>
        </div>
      `
    )

    .join(""); // mellem listerne(array) er der komma, vha join vil der ikke være komma længere.
  console.log(markup);
  productContainer.innerHTML = markup;
}

// logical and -> &&
// not operator -> !, forskellig fra
//${product.discount && "discount"}
