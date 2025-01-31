let productId = 1163;
let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json()) //then(så) henter den gyldig data som er jsonfil
  .then((data) => showProduct(data)); //then (så) kaldes functionen
//then (så) benyttes dataen i følgende skriv
function showProduct(data) {
  productContainer.innerHTML = `
     <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="blå trøje">
            </div>
            <div class="product_info">
                <h2>Product Information</h2>
                <h3>Model Name</h3>
                <p>${data.productdisplayname}</p>
                <br>
                <h3>Category</h3>
                <p>${data.category}</p>
                <br>
                <h3>Article Type</h3>
                <p>${data.articletype}</p>
                <br>
                <h3>Brand</h3>
                <p>${data.brandname}</p>
                <br>
                <h3>Inventory Number</h3>
                <p>${productId}</p>
                <br>
            </div>

            <div class="product_buy">
                <div>
                    <h2>${data.productdisplayname}</h2>
                    <br>
                    <div>
                        <h3>Price</h3>
                        <p>${data.price}</p>
                    </div>
                    <br>
                    <div class="style">
                        <form action="#">
                            <label for="size">
                                Select Your Size
                            </label>
                            <select name="size" id="size">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </form>
                        <br>
                    </div>
                    <div id="center">
                        <a href="#">
                            <div class="knap">
                                <h2>Add To Basket</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            `;
}
