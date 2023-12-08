// Fetch products from products.json
fetch("./products.json")
  .then((response) => response.json())
  .then((results) => {
    const productContainer = document.getElementById("product-items");
    let htmlString = "";

    results.products.map((product) => {
      htmlString += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <img
                src="${product.image}" 
                class="card-img-top" 
                alt="${product.name}" 
                style="height: 300px; object-fit: contain;"
              >
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">
                ${
                  product.desc.length > 50
                    ? product.desc.slice(0, 50) + "..."
                    : product.desc
                }
              </p>
              <p class="card-text">Price: $${product.price}</p>
              <p class="card-text">Sale Price: $${product.salePrice}</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      `;

      productContainer.innerHTML = htmlString;
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
