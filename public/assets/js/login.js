// DEPENDENCIES ==============================
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");
let alertMessage = document.querySelector("#alertMessage");

// DATA ==============================

// FUNCTIONS ==============================
const checkValues = (field) => {
	const valueExists = field && field.length > 0;
	alertMessage.classList.add("text-success");
	if (!valueExists) alertMessage.classList.add("text-danger");
	return valueExists;
};

const validateUserInputs = () => {
	alertMessage.textContent = "";
	if (!checkValues(email.value))
		return (alertMessage.textContent = "Email is required!");
	if (!checkValues(password.value))
		return (alertMessage.textContent = "Password is required!");
	return true;
};

const init = async (event) => {
	event.preventDefault();
	if (validateUserInputs() !== true) return;

	// Prepare new user object
	const loginUser = {
		email: email.value,
		password: password.value,
	};

	// Make api call to userRoutes
	const response = await fetch(`/api/user/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginUser),
	}).then((data) => data.json());
	console.log("Login response is: ", response);

	// Redirect to dashboard page
	if (response) {
		// window.location.replace("/dashboard");
	}
};

// INTERACTIONS ==============================
loginBtn.addEventListener("click", init);
