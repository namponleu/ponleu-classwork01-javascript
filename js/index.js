import { cardComponents } from "../components/cardComponents..js";
import { products } from "../data/products.js";

// Create variable for store and rendering the products
let renderArea = document.querySelector("#renderArea");

// Render the product
products
  .slice(0, 20)
  .map((product) => (renderArea.innerHTML += cardComponents(product))); 