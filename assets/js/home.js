let homeProdCnts = document.getElementById("homeProdCnts");
let page = 1;
let limit = 3;

const renderProducts = () => {
  axios
    .get(
      `https://655c83c825b76d9884fd6f17.mockapi.io/products?limit=${limit}&page=${page}`
    )
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let miniDiv = document.createElement("div");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
            <button onclick = "addToCart(${item.id})">Add to Cart</button>
            `;
        homeProdCnts.append(miniDiv);
      });
      page++;
    });
};

loadMore.addEventListener("click", renderProducts);

const addToCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
};

window.onload = () => {
  renderProducts();
};

let searchInp = document.getElementById("searchInp");
let searchBtn = document.getElementById("searchBtn");

function findByName() {
  homeProdCnts.innerHTML = ``;
  axios
    .get("https://655c83c825b76d9884fd6f17.mockapi.io/products")
    .then((res) => {
      db = res.data;
      let filteredData = db.filter((item) =>
        item.name.toLowerCase().startsWith(searchInp.value.toLowerCase())
      );
      let sortData = [...filteredData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      sortData.map((item) => {
        let miniDiv = document.createElement("div");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
            <button click ="addToCart(${item.id})">Add to Cart</button>
            `;
        homeProdCnts.append(miniDiv);
      });
    });
}

searchBtn.addEventListener("click", findByName);
