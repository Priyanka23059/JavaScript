import { products } from '../data/14-modules-products.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product">
      <img src="${product.image}" width="200">

      <h3>${product.name}</h3>

      <p>₹${product.price}</p>

      <button>Add to Cart</button>
    </div>
  `;
});

document.querySelector('.js-products')
  .innerHTML = productsHTML;