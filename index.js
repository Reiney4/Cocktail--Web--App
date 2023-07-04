let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url ="https://apilist.fun/api/the-cocktail-db";
let userInp = document.getElementById("user-inp").ariaValueMax;

if(userInp.length == 0) {
    result.innerHTML = `<h3 class ="msg">The input field
    cannot be empty</h3>`;
    `
}