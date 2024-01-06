let myDiv = document.getElementById("cartProducts");

const getProducts = () => {
  myDiv.innerHTML = ``;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
                <img src="${item.image}" alt="">
                <p>${item.name}</p>
                <p style="font-size:16px;">${item.price}</p>
                <button onclick = "removeFromCart(${index})">Remove from Cart</button>`;
    myDiv.append(box);
  });
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
};

window.onload = () => {
  getProducts();
};
