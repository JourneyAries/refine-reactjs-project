import axios from 'axios';

const articlesDetail = async (id) => {
	const response = await axios.get(
		`https://hacker-news.firebaseio.com/v0/item/${id}.json`,
	);
	return response.data;
};

export const getTopNews = async () => {
	try {
		const responses = await axios.get(
			'https://hacker-news.firebaseio.com/v0/topstories.json?',
		);

		const getTenIds = responses.data.slice(0, 10);

		const articlePromises = await Promise.all(
			getTenIds.map((id) => articlesDetail(id)),
		);

		return articlePromises;
	} catch (error) {
		console.error(error);
	}
};
