// DEPENDENCIES ==============================
const commentBox = document.querySelector("#commentBox");
const commentBtn = document.querySelector("#commentBtn");
let alertMessage = document.querySelector("#alertMessage");

// DATA ==============================

// FUNCTIONS ==============================
const checkValues = (field) => {
	return field && field.length > 0;
};

const resetFields = () => {
	commentBox.value = "";
};

const initComment = async (event) => {
	event.preventDefault();
	if (!checkValues(commentBox.value)) return;

	// Prepare new user object
	const commentObj = {
		content: commentBox.value,
		post_id: commentBox.dataset.postId,
		user_id: commentBox.dataset.userId,
	};

	// Make api call to userRoutes
	const response = await fetch(`/api/comment`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(commentObj),
	}).then((data) => data.json());

	// Redirect to dashboard page
	if (response && !response.error) {
		resetFields();
		setTimeout(() => {
			window.location = `/post/${commentBox.dataset.postId}`;
		}, 1000);
	}
};
// INTERACTIONS ==============================
commentBtn.addEventListener("click", initComment);
