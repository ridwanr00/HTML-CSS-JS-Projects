// stores lists
const stores = ["store1", "store2", "store3"];

// products price
const productPrices = {
  "product1-price": 597.99,
  "product2-price": 879.99,
  "product3-price": 1980.0,
};

// Calculate the total price
const calculateTotalPrice = () => {
  let total = 0;
  stores.map((store) => {
    const checkbox = document.getElementById(store);
    if (checkbox?.checked) {
      const productId = checkbox.value;
      const priceId = `${productId}-price`;
      const quantityId = `${productId}-quantity`;
      const quantity = Number(document.getElementById(quantityId).innerHTML);
      const price = productPrices[priceId];
      total += price * quantity;
    }
  });
  document.getElementById("total-price").innerHTML = `US\$${total.toFixed(2)}`;
};

// choose all button
const chooseAll = () => {
  stores.map((store) => (document.getElementById(store).checked = true));
  calculateTotalPrice();
};

// remove all button
const removeAll = () => {
  document.getElementById("products").innerHTML = "";
  document.getElementById("total-price").innerHTML = "US$0";
};

// initialize product prices
for (const product in productPrices) {
  document.getElementById(
    `${product}`
  ).innerHTML = `US\$${productPrices[product]}`;
}

// check the checkbox input type wether it is checked or unchecked
const isChecked = (id, product) => {
  const status = document.getElementById(id).checked;
  if (status == true) {
    const text = document.getElementById(product).innerHTML;
    const price = Number(text.substring(3));
    productPrices[product] = price;
  }
  calculateTotalPrice();
};

// remove per product
const removeProduct = (product, price) => {
  document.getElementById(product).innerHTML = "";
  productPrices[price] = 0;
  calculateTotalPrice();
};

// add product quantity
const addProduct = (product, id) => {
  let quantity = Number(document.getElementById(product).innerHTML);
  quantity += 1;
  document.getElementById(product).innerHTML = quantity;
  const price = quantity * productPrices[id];
  productPrices[product] = price;
  document.getElementById(id).innerHTML = `US\$${price}`;
  calculateTotalPrice();
};

// decrease product quantity
const minProduct = (product, id) => {
  let quantity = Number(document.getElementById(product).innerHTML);
  if (quantity <= 1) {
    return;
  } else {
    quantity -= 1;
    document.getElementById(product).innerHTML = quantity;
    const price = quantity * productPrices[id];
    productPrices[product] = price;
    document.getElementById(id).innerHTML = `US\$${price}`;
    calculateTotalPrice();
  }
};

// initial total price calculation
calculateTotalPrice();
