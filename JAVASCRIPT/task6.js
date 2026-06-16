const products = [
  { name: "   wireless mouse ", category: "electronics", quantity: 25, price: 799 },
  { name: "Gaming Keyboard", category: "ELECTRONICS", quantity: 8, price: 2499 },
  { name: "office chair", category: "furniture", quantity: 3, price: 5999 },
  { name: "LED Monitor", category: "Electronics", quantity: 15, price: 10999 },
  { name: "water bottle", category: "home", quantity: 50, price: 299 }
];

const finalProductNames = products.map(product => {
  const trimmedName = product.name.trim();
  const splitName = trimmedName.split(" ");
  const properCaseWords = splitName.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return properCaseWords.join(" ");
});

for (let i = 0; i < products.length; i++) {
  products[i].name = finalProductNames[i];
  
  products[i].category = products[i].category.toUpperCase(); 
}
console.log("PRODUCT DETAILS")
console.log(products);




console.log("2.INVENTORY VALUE")
for (let i = 0; i < products.length; i++) {
  
    
  const inventoryValue = products[i].quantity * products[i].price;
  
  
  console.log(`${products[i].name} = ${inventoryValue}`);
}





console.log("3.STOCK STATUS")
for (let i = 0; i < products.length; i++) {
  let Stock_Status = "";

  
  if (products[i].quantity > 20) {
    Stock_Status = "HIGH STOCK";
  } else if (products[i].quantity >= 10 && products[i].quantity <= 20) {
    Stock_Status = "MEDIUM STOCK";
  } else if (products[i].quantity >= 1 && products[i].quantity <= 9) {
    Stock_Status = "LOW STOCK";
  } else {
    Stock_Status = "OUT OF STOCK";
  }

  
  console.log(`${products[i].name} = ${Stock_Status}`);
}


console.log("4.WAREHOUSE STATISTICS");

const totalProducts = products.length;

let totalInventoryValue = 0;
let totalProductPrice = 0;

for (let i = 0; i < products.length; i++) {
  totalInventoryValue += products[i].quantity * products[i].price;
  totalProductPrice += products[i].price;
}

const averagePrice = totalProductPrice / totalProducts;

const productPrices = products.map(p => p.price);
const productQuantities = products.map(p => p.quantity);


const maxPrice = Math.max(...productPrices);
const mostExpensiveProduct = products.find(p => p.price === maxPrice);


const minPrice = Math.min(...productPrices);
const cheapestProduct = products.find(p => p.price === minPrice);


const maxQuantity = Math.max(...productQuantities);
const highestQuantityProduct = products.find(p => p.quantity === maxQuantity);


const minQuantity = Math.min(...productQuantities);
const lowestQuantityProduct = products.find(p => p.quantity === minQuantity);


console.log(`Total Products = ${totalProducts}`);
console.log(`Total Inventory Value = ${totalInventoryValue}`);
console.log(`Average Product Price = ${averagePrice.toFixed(2)}`);
console.log(`Most Expensive Product = ${mostExpensiveProduct.name} (${maxPrice})`);
console.log(`Cheapest Product = ${cheapestProduct.name} (${minPrice})`);
console.log(`Product with Highest Quantity = ${highestQuantityProduct.name} (${maxQuantity})`);
console.log(`Product with Lowest Quantity = ${lowestQuantityProduct.name} (${minQuantity})`);





console.log("4.SEARCH FEATURE");
const keyword = "ele";

for (let i = 0; i < products.length; i++) {
  const categoryLower = products[i].category.toLowerCase();
  const keywordLower = keyword.toLowerCase();

  if (categoryLower.includes(keywordLower)) {
    console.log(`Found: ${products[i].name} [Category: ${products[i].category}]`);
  }
}



console.log("5.SORTING");


const sortByPriceDesc = [...products].sort((a, b) => b.price - a.price);
console.log("--- Price: Highest to Lowest ---");
for (let i = 0; i < sortByPriceDesc.length; i++) {
  console.log(`${sortByPriceDesc[i].name} - Price: ${sortByPriceDesc[i].price}`);
}


const sortByQtyAsc = [...products].sort((a, b) => a.quantity - b.quantity);
console.log("\n--- Quantity: Lowest to Highest ---");
for (let i = 0; i < sortByQtyAsc.length; i++) {
  console.log(`${sortByQtyAsc[i].name} - Qty: ${sortByQtyAsc[i].quantity}`);
}


console.log("6.Top 3 Costliest Products:");
for (let i = 0; i < 3; i++) {
  if (sortByPriceDesc[i]) {
    console.log(`${i + 1}. ${sortByPriceDesc[i].name} (${sortByPriceDesc[i].price})`);
  }
}


console.log("7.LOW STOCK ALERT");
for (let i = 0; i < products.length; i++) {
  if (products[i].quantity < 5) {
    console.log(`WARNING: ${products[i].name} stock is critically low.`);
  }
}


console.log("8.CATEGORY SUMMARY");
const categoryCount = {};

for (let i = 0; i < products.length; i++) {
  const currentCategory = products[i].category;
  
  if (categoryCount[currentCategory]) {
    categoryCount[currentCategory] += 1;
  } else {
    categoryCount[currentCategory] = 1;
  }
}

for (const category in categoryCount) {
  console.log(`${category} : ${categoryCount[category]}`);
}





console.log("9.STOCK VISUALIZATION");

for (let i = 0; i < products.length; i++) {
  const productName = products[i].name;
  const quantity = products[i].quantity;
  
  const visualBar = "#".repeat(quantity);
  
  console.log(`${productName.padEnd(20)} ${visualBar}`);
}