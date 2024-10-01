let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push(name);
    total += price;

    const cartItems = document.getElementById('cartItems');
    const newItem = document.createElement('li');
    newItem.textContent = name;
    cartItems.appendChild(newItem);

    document.getElementById('totalPrice').textContent = `Tổng tiền: ${total} VNĐ`;
}
