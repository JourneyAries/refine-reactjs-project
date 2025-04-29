import React from 'react';
import Hashtag from './Hashtag';
import Responsible from './Responsible';

const Cards = ({ responsible, hashtag, title, description }) => {
	return (
		<div className='flex flex-col p-4 gap-y-2 rounded bg-white'>
			{/* hashtag */}
			{hashtag && hashtag.length > 0 && (
				<div className='flex gap-1 w-full flex-wrap'>
					{hashtag.map((tag, index) => (
						<Hashtag key={index} text={tag} />
					))}
				</div>
			)}
			{/* title */}
			<h3 className='font-bold text-slate-900'>{title}</h3>
			<p className='line-clamp-2 text-sm text-slate-600'>{description}</p>
			{/* Responsible */}
			{responsible && <Responsible name={responsible} />}
		</div>
	);
};

export default Cards;
