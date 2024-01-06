let myForm = document.getElementById("myForm");
let nameinp = document.getElementById("nameinp");
let surnameinp = document.getElementById("surnameinp");
let ageinp = document.getElementById("ageinp");
let emailinp = document.getElementById("emailinp");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  axios
    .post("https://655c83c825b76d9884fd6f17.mockapi.io/basket", {
      name: nameinp.value,
      surname: surnameinp.value,
      age: ageinp.value,
      email: emailinp.value,
    })
});
