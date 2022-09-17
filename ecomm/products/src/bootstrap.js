
import faker from 'faker';

// Instead of rendering the app in Container, we need to make
// below code changes.
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products+= `<div>${name}</div>`
  }

  // el represents a reference to an HTML element.
  el.innerHTML = products;
};

// In the context in which the project is run in isolation.
if (process.env.NODE_ENV === 'development') {
  const divElement = document.querySelector("#dev-products");

  /* Assuming our container doesn't have an element
  * with id 'dev-products' */
  if (divElement) {
    // We are probably running the project in isolation.
    mount(divElement);
  }
}


// Export the function so that other projects can use it.
export {mount};
