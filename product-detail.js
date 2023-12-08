// get the id from the query string
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

// Fetch products from products.json
fetch("./products.json")
  .then((response) => response.json())
  .then((results) => {
    const productContainer = document.querySelector("#product-container");

    // Clear the existing content in the product container
    productContainer.innerHTML = "";

    results.products.find((product) => {
      if (product.id == id) {
        productContainer.innerHTML = `
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
          </div>
        `;
        return true;
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
