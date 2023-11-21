const params = new URL(window.location).searchParams;
const orderId = params.get('id')
const userName = params.get('user')
const price = params.get('price')

document.querySelector(".order-id").textContent = orderId;
document.querySelector(".price").textContent = price;
document.querySelector(".user").textContent = userName;
