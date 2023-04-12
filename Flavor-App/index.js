const flavorsMenu = [
  {
    name: "Single",
    description: ["one scoop"],
    id: 0,
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
    id: 1,
  },

  {
    name: "It's a Party",
    description: ["three scoops with cone"],
    price: 12,
    flavors: ["pumpkin pie", "brownie", "salted caramel"],
    emoji: "🥳",
    id: 2,
  },
];

const showMenu = document.getElementById("select-menu");

const showFlavors = flavorsMenu.map(
  (flavor) =>
    `<ul>
    <li class="name">${flavor.name}</li>
    <li class="description">${flavor.description}</li>
    <li class="flavors">${flavor.flavors}</li>
    <li class="price">${flavor.price}</li>
  </ul>`
);

showMenu.innerHTML = showFlavors;
