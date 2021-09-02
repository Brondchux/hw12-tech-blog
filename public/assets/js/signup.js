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
	return field && field.length > 0;
};

const validateUserInputs = () => {
	alertMessage.textContent = "";
	alertMessage.classList.add("text-danger");
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

const resetFields = () => {
	username.value = "";
	email.value = "";
	password.value = "";
	cPassword.value = "";
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
	alertMessage.textContent = response ? response.message : "";

	// Redirect to dashboard page
	if (response && !response.error) {
		alertMessage.classList.add("text-success");
		resetFields();
		setTimeout(() => {
			window.location = "/dashboard";
		}, 2000);
	}
};

// INTERACTIONS ==============================
signupBtn.addEventListener("click", init);
