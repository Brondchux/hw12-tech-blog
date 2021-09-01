const { Post } = require("../models");

const posts = [
	{
		id: 1,
		title: "Use Captivating Headlines",
		content:
			"Your blog post headline should be compelling and at the same time meaningful. Considering that 80% of readers never make it past the headline, you have to prioritize it and make sure it hooks your readers from the very start.",
		user_id: 2,
	},
	{
		id: 2,
		title: "Provide Meaningful Value",
		content:
			"Ultimately, your blog title should tell your readers what they’ll learn from reading your blog and what value will you provide to them with your article.",
		user_id: 3,
	},
	{
		id: 3,
		title: "Use Actionable Words",
		content:
			"Keep your blog titles clear, concise, and free of irrelevant/vague words that don’t describe the crux of your article and are incapable of getting your target audience to read and/or share your article.",
		user_id: 1,
	},
	{
		id: 4,
		title: "Optimize for SEO",
		content:
			"When brainstorming for blog titles, there’s an important question you need to ask yourself, and that question is: What’s the motivation behind my readers researching this subject on search engines?",
		user_id: 4,
	},
	{
		id: 5,
		title: "Practice More",
		content:
			"Sometimes it takes writing multiple blog titles to find the perfect one. Perfecting your ability to write effective blog titles is not a race, but a journey, so stay consistent and enjoy the process.",
		user_id: 1,
	},
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;
