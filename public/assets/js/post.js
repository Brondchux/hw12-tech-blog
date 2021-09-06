// DEPENDENCIES ==============================
const postTitle = document.querySelector("#post-title");
const postContent = document.querySelector("#post-content");
const postBtn = document.querySelector("#post-btn");
const editPostBtns = document.querySelectorAll(".edit-post-btn");
const deletePostBtns = document.querySelectorAll(".delete-post-btn");
let alertMessage = document.querySelector("#alertMessage");

// DATA ==============================

// FUNCTIONS ==============================
const checkValues = (field) => {
	return field && field.length > 0;
};

// TODO: refactor me to maintain a DRY code
const validateUserInputs = () => {
	alertMessage.textContent = "";
	alertMessage.classList.add("text-info");
	if (!checkValues(postTitle.value))
		return (alertMessage.textContent = "Post title is required!");
	if (!checkValues(postContent.value))
		return (alertMessage.textContent = "The post content is missing!");
	return true;
};

const makeApiCall = async (method, bodyObj) => {
	const response = await fetch(`/api/post`, {
		method,
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

const createPost = async (event) => {
	event.preventDefault();
	if (validateUserInputs() !== true) return;

	const postObj = {
		title: postTitle.value,
		content: postContent.value,
		user_id: postBtn.dataset.userId,
	};
	const response = await makeApiCall("POST", postObj);
	alertMessage.textContent = response.message;
	if (response && !response.error) {
		redirectToPage("/dashboard");
	}
};

// INTERACTIONS ==============================

// Create post
postBtn.addEventListener("click", createPost);

// Delete post
deletePostBtns.forEach((deletBtn) => {
	const postObj = {
		post_id: deletBtn.dataset.postId,
		user_id: deletBtn.dataset.userId,
	};
	deletBtn.addEventListener("click", async () => {
		const response = await makeApiCall("DELETE", postObj);
		if (response && !response.error) {
			redirectToPage("/dashboard");
		}
	});
});
