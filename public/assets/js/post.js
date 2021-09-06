// DEPENDENCIES ==============================
const editPostBtns = document.querySelectorAll(".editPostBtn");
const deletePostBtns = document.querySelectorAll(".deletePostBtn");

// DATA ==============================

// FUNCTIONS ==============================
const makeApiCall = async (bodyObj) => {
	const response = await fetch(`/api/post`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(bodyObj),
	}).then((data) => data.json());
	return response;
};

const redirectToPage = (pageName) => {
	setTimeout(() => {
		window.location = pageName;
	}, 200);
};

// INTERACTIONS ==============================
deletePostBtns.forEach((deletBtn) => {
	const postObj = {
		post_id: deletBtn.dataset.postId,
		user_id: deletBtn.dataset.userId,
	};
	deletBtn.addEventListener("click", async () => {
		let response = await makeApiCall(postObj);
		// console.log("api-call-response: ", response);
		if (response && !response.error) {
			redirectToPage("/dashboard");
		}
	});
});
