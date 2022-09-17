
import { mount as products } from 'products/ProductsIndex';
import { mount as cart } from 'cart/CartShow';
import 'cart/CartShow';

console.log('Container!');

products(document.querySelector('#my-products'));
cart(document.querySelector('#my-cart'));
