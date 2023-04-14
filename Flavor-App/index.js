const flavorsMenu = [
  {
    name: "Single",
    description: ["one scoop"],
    id: 1000,
    price: 4.75,
    flavors: ["pumpkin pie", "brownie", "salted caramel"],
    emoji: "🍦",
  },
  {
    name: "Double Date",
    description: ["two scoops"],
    price: 8.5,
    flavors: ["pumpkin pie", "brownie", "salted caramel"],
    emoji: "🍨",
    id: 2000,
  },

  {
    name: "It's a Party",
    description: ["three scoops with cone"],
    price: 12,
    flavors: ["pumpkin pie", "brownie", "salted caramel"],
    emoji: "🥳",
    id: 3000,
  },
];

let itemsAdded = [];

let createCart = document.getElementById("add-items");
const showMenu = document.getElementById("select-menu");

const showFlavors = flavorsMenu.map(
  (flavor) =>
    `
    <div class="order-options">
    <ul>
    <li class="name">${flavor.name}</li>
    <li class="description">${flavor.description}</li> 
    <li class="price">${flavor.price}</li>
    <div class="select-flavor">
    <div>choose flavor:</div>
    <input type ="radio" class="flavors">
    ${flavor.flavors[0]} 
    <input type ="radio" class="flavors">
    ${flavor.flavors[1]} 
    <input type ="radio" class="flavors">
    ${flavor.flavors[2]}</input>
    <br>
   </div>
<button class="add-btn" id="add-btn" data-add="${flavor.id}">+</button>
  </ul>
   <hr >
  </div
  `
);

showMenu.innerHTML = showFlavors;

document.addEventListener("click", function (event) {
  if (event.target.dataset.add) {
    createOrder(event.target.dataset.add);
  }
});

function createOrder(flavorId) {
  const addItem = flavorsMenu.filter(function (item) {
    return item.id == flavorId;
  })[0];

  itemsAdded.push(addItem);

  //  total += addItem.price

  showOrder();
}

function showOrder() {
  checkout = "";
  itemsAdded.forEach(function (order) {
    checkout += `<div>${order.emoji} ${order.name} $${order.price}</div>`;
  });

  orderHTML(checkout);

  console.log(checkout);
}

function orderHTML(checkout) {
  let itemsHTML = ``;

  itemsHTML = `<div class="cart-items" id="add-to-cart">
                 <div class="title">your order</div>
                 ${checkout} 
                 </div>
                 <button class ="purchase-btn">Complete Order</button>`;

  document.getElementById("add-items").innerHTML = itemsHTML;
}
