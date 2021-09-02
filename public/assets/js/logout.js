// DEPENDENCIES ==============================
const logoutBtn = document.querySelector("#logoutBtn");

// DATA ==============================

// FUNCTIONS ==============================
const initLogout = async (event) => {
	event.preventDefault();

	// Make api call to userRoutes
	const response = await fetch(`/api/user/logout`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});

	// Redirect to dashboard page
	if (response.ok) {
		window.location = "/";
	}
};

// INTERACTIONS ==============================
if (logoutBtn) logoutBtn.addEventListener("click", initLogout);
