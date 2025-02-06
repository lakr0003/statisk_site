const categoryContainer = document.querySelector(".category_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json()) //then(så) henter den gyldig data der laves som en jsonfil
  .then(showCat); //then (så) kaldes funktionen og dataen/produkterne fetches og benyttes i følgende functions skriv

function showCat(data) {
  console.log(data);

  const markup = data
    .map(
      (element) => `
        <a class="kategori" href="productlist.html?category=${element.category}">
                <h2 class="kategori_tekst">${element.category}</h2>
            </a>
      `
    )
    .join(""); // mellem listerne(array) er der komma, vha join vil der ikke være komma længere.

  console.log(markup);
  categoryContainer.innerHTML = markup;
}
