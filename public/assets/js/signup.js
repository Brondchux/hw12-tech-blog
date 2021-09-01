// DEPENDENCIES ==============================
const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
const cPassword = document.querySelector("#cPassword").value;
const signupBtn = document.querySelector("#signupBtn");
let alertMessage = document.querySelector("#alertMessage");

// DATA ==============================

// FUNCTIONS ==============================
const passwordsMatch = (password, confirmPassword) =>
	password === confirmPassword;

const checkValues = (field) => {
	const valueExists = field && field.length > 0;
	alertMessage.classList.add("text-success");
	if (!valueExists) alertMessage.classList.add("text-danger");
	return valueExists;
};

const init = (event) => {
	event.preventDefault();
	console.log("username: ", username);
	console.log("email: ", email);
	if (!checkValues(email)) alertMessage.textContent = "Email is required!";
};

// INTERACTIONS ==============================
signupBtn.addEventListener("click", init);
