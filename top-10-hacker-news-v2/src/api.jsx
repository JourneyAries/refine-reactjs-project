import axios from 'axios';

const baseArticle = import.meta.env.VITE_BASE_ARTICLE_URL;
const topArticles = import.meta.env.VITE_TOP_ARTICLES_URL;

const articlesDetail = async (id) => {
	const response = await axios.get(`${baseArticle}/${id}.json`);
	return response.data;
};

export const getTopNews = async () => {
	try {
		const responses = await axios.get(topArticles);

		const getTenIds = responses.data.slice(0, 10);

		const articlePromises = await Promise.all(
			getTenIds.map((id) => articlesDetail(id)),
		);

		return articlePromises;
	} catch (error) {
		console.error(error);
	}
};
