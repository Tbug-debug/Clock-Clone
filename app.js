const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("#h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_COIN = "username";

function onLoginBtnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showUsername(username);
}

function showUsername(username) {
  h1.classList.remove(HIDDEN_CLASSNAME);
  h1.innerHTML = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginBtnClick);

const savedUsername = localStorage.getItem(USERNAME_COIN);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  showUsername(savedUsername);
}
