import {cart, addToCart } from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';



    /*const products = [{
      image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
      name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090
    }, {
      image: 'images/products/intermediate-composite-basketball.jpg',
      name: 'Intermediate Size Basketball',
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095
    }, {
      image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
      name: 'Adults Plain Cotton T-Shirt - 2 Pack',
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799
    }, {

        image: 'images/products/black-2-slot-toaster.jpg',
        name: '2 Slot Toaster - Black',
        rating: {
            stars: 5,
            count: 2197

        },
        priceCents: 1899

    }, {

        image: 'images/products/Boxing-Gloves.jpg',
        name: 'Pairs Boxing Gloves - Black',
        rating: {

            stars: 4,
            count: 4657
        },
        priceCents:2088

    }, {

        image: 'images/products/Black-shoes.jpg',
        name: 'Black Shoes Pair',
        rating: {

            stars: 4.5,
            count: 7557
        },
        priceCents: 2247


    }, {

        image: 'images/products/White-Pairs-Shoes.jpg',
        name: 'White Pair Shoes',
        rating: {

            stars: 5,
            count: 3643
        },
        priceCents: 2487


    }, {

        image: 'images/products/men-wear-sunglass.jpg',
        name: 'Men Wear Sunglass',
        rating: {

            stars: 4,
            count: 3643
        },
        priceCents: 299

    }, {

        image: 'images/products/Sunglass-black.jpg',
        name: 'Black Sunglass',
        rating: {

            stars: 5,
            count: 3434
        },
        priceCents: 499


    },{


        image: 'images/products/Digital-Watch.jpg',
        name: 'Digital-Watch',
        rating: {

            stars: 5,
            count: 3434
        },
        priceCents: 3499


    }, {

        image: 'images/products/men-White-shirt.jpg',
        name: 'Black Sunglass',
        rating: {

            stars: 4,
            count: 3434
        },
        priceCents: 499

 
    }, {

        image: 'images/products/Electronic-Watch.jpg',
        name: 'Electronic Watch',
        rating: {

            stars: 4.5,
            count: 3434
        },
        priceCents: 1588

    }];*/





let productsHTML = '';
  
    products.forEach((product) => {
      productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}">
          </div>
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${Math.round(product.rating.stars * 10)}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>
          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="product-spacer"></div>
          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>
          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      `;
    });
  
    document.querySelector('.js-products-grid').innerHTML = productsHTML;
   
    function updateCartQuantity() {
      let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    }

    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();

    });
});







