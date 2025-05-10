import React, { useState, useEffect } from 'react';
import { getTopNews } from '../../api';
import Card from './card/Card';

const Body = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getTopNews().then((article) => {
			setArticles(article);
		});
	}, []);

	return (
		<div className='flex flex-col gap-y-4'>
			{articles.map((article) => (
				<Card />
			))}
		</div>
	);
};

export default Body;
