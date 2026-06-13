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

let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock && products[i].price < 10000) {
    filteredProducts.push(products[i]);
  }
}

console.log("Filtered Products:",filteredProducts);

let groupedProducts = {};

for (let i = 0; i < filteredProducts.length; i++) {
  let product = filteredProducts[i];
  let category = product.category;

  if (!groupedProducts[category]) {
    groupedProducts[category] = [];
  }
  groupedProducts[category].push({
    name: product.name,
    price: product.price
  });
}

console.log("Grouped Products:",groupedProducts);
// console.log(;

let totalValue = 0;

for (let i = 0; i < filteredProducts.length; i++) {
  totalValue += filteredProducts[i].price;
}

console.log("Total Value:", totalValue);