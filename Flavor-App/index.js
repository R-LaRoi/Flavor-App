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
    <li class="flavors">${flavor.flavors}</li>
    <li class="price">${flavor.price}</li>
   
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

  if (itemsAdded) {
    itemsAdded.push(addItem);

    itemsAdded.forEach(function (addItem) {
      createCart.innerHTML += `
          <div class="cart-items" id="add-to-cart">
            ${addItem.emoji} ${addItem.name} $${addItem.price}
          </div>
       `;
      console.log(addItem.name);
    });
  }

  showCartItems = `
  <div>Your Order</div>
  <div class="cart-items" id="add-to-cart"> ${addItem.emoji} ${addItem.name} $${addItem.price}
  </div>
  <button class="purchase-btn">Complete Order</button>`;

  // console.log(itemsAdded);
  createCart.innerHTML = showCartItems;
}
