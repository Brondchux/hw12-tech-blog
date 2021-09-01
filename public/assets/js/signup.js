// DEPENDENCIES ==============================
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");
const signupBtn = document.querySelector("#signupBtn");
let alertMessage = document.querySelector("#alertMessage");

// DATA ==============================

// FUNCTIONS ==============================
const passwordsMatch = (password, confirmPassword) =>
	password === confirmPassword;

const passwordLength = (password) => password.length > 7;

const checkValues = (field) => {
	const valueExists = field && field.length > 0;
	alertMessage.classList.add("text-success");
	if (!valueExists) alertMessage.classList.add("text-danger");
	return valueExists;
};

const validateUserInputs = () => {
	alertMessage.textContent = "";
	if (!checkValues(username.value))
		return (alertMessage.textContent = "Username is required!");
	if (!checkValues(email.value))
		return (alertMessage.textContent = "Email is required!");
	if (!checkValues(password.value))
		return (alertMessage.textContent = "Password is required!");
	if (!checkValues(cPassword.value))
		return (alertMessage.textContent = "Confirm password is required!");
	if (!passwordsMatch(password.value, cPassword.value))
		return (alertMessage.textContent = "Passwords do not match!");
	if (!passwordLength(password.value))
		return (alertMessage.textContent =
			"Password must be at least 8 characters long!");
	return true;
};

const init = async (event) => {
	event.preventDefault();
	if (validateUserInputs() !== true) return;

	// Prepare new user object
	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value,
	};

	// Make api call to userRoutes
	const response = await fetch(`/api/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	}).then((data) => data.json());
	console.log("Response is: ", response);
};

// INTERACTIONS ==============================
signupBtn.addEventListener("click", init);
