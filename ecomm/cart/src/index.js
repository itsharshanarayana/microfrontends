console.log("Cart ...");

const randomNum = Math.floor(Math.random() * 100);
const numberOfRecords = `<div>Number of items in the card: ${randomNum}</div>`;

document.querySelector('#dev-cart').innerHTML = numberOfRecords;
