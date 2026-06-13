const products = [
    { name: "Laptop", price: 45000, inStock: true, category: "electronics" },
    { name: "Shirt", price: 1200, inStock: false, category: "clothing" },
    { name: "Phone", price: 25000, inStock: true, category: "electronics" },
    { name: "Shoes", price: 3500, inStock: true, category: "clothing" },
    { name: "Tablet", price: 18000, inStock: false, category: "electronics" },
    { name: "Watch", price: 8000, inStock: true, category: "accessories" },
    { name: "Bag", price: 2200, inStock: true, category: "accessories" },
    { name: "Headphones", price: 3000, inStock: true, category: "electronics" }
];

const productContainer = document.getElementById("productContainer");
const sortBtn = document.getElementById("sortBtn");

let isAscending = true;

let inStockProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].inStock === true) {
        inStockProducts.push(products[i]);
    }
}


function displayProducts(list) {
    productContainer.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const product = list[i];

        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow hover:shadow-lg";

        card.innerHTML = "<h2 class='text-lg font-bold mb-2'>" + product.name + "</h2>";
        card.innerHTML += "<p class='text-green-600 font-bold mb-3'>₹" + product.price + "</p>";
        card.innerHTML += "<span class='bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded'>" + product.category + "</span>";

        productContainer.appendChild(card);
    }
}

displayProducts(inStockProducts);

sortBtn.addEventListener("click", () => {
    if (isAscending) {
        inStockProducts.sort((a, b) => a.price - b.price);
        sortBtn.textContent = "Sort by Price (High to Low)";
    } else {
        inStockProducts.sort((a, b) => b.price - a.price);
        sortBtn.textContent = "Sort by Price (Low to High)";
    }

    isAscending = !isAscending;

    displayProducts(inStockProducts);
});