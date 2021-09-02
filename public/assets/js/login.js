// DEPENDENCIES ==============================
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");
let alertMessage = document.querySelector("#alertMessage");

// DATA ==============================

// FUNCTIONS ==============================
const checkValues = (field) => {
	return field && field.length > 0;
};

const validateUserInputs = () => {
	alertMessage.textContent = "";
	alertMessage.classList.add("text-info");
	if (!checkValues(email.value))
		return (alertMessage.textContent = "Email is required!");
	if (!checkValues(password.value))
		return (alertMessage.textContent = "Password is required!");
	return true;
};

const resetFields = () => {
	email.value = "";
	password.value = "";
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
loginBtn.addEventListener("click", init);
