var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
   var newItem = {
   itemName : item,
   itemPrice : (Math.floor(Math.random() * 101))
   };
   cart.push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
 }

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else if (cart.length === 1{
    return `in your cart, you have ${cart.itemName
    let output = `In your cart, you have `;
  for (let i = 0; i < cart.length; i++){
    output += `${cart[i].itemName} at ${cart[i].itemPrice}, `;
  }
  output += `and ${cart[cart.length].itemName} at ${cart[cart.length].itemPrice}.`;
  return output;
  }
}

function total() {
  // write your code here
  let output = 0
  for (let i = 0; i < cart.length; i++){
    output += cart[i].itemPrice;
  }
  return output
}

function removeFromCart(item) {
  
  // write your code here
  cart.forEach = function (item){
    if 
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    console.log( `Sorry, we don't have a credit card on file for you.`);
  }
  
}
