// Add to cart button event listener
const addToCartButtons = document.querySelectorAll('button');
const cartItems = document.querySelector('#checkout ul');
let itemCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    itemCount++;
    const product = button.parentNode;
    const productName = product.querySelector('h3').textContent;
    const productDescription = product.querySelector('p').textContent;
    const productQty = 1;
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <h3>${productName}</h3>
      <p>${productDescription}</p>
      <input type="number" value="${productQty}">
      <button>Remove</button>
    `;
    cartItems.appendChild(cartItem);
    updateCart();
  });
});

