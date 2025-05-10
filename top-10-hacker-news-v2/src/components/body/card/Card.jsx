import React from 'react';
import Header from './Header';
import Body from './Body';

const Card = () => {
	return (
		<div className='rounded-lg cursor-pointer p-4 flex flex-col gap-y-2 bg-slate-100 border border-transparent group hover:bg-violet-100 hover:border-violet-300'>
			<Header classVote='group-hover:bg-violet-600 group-hover:text-white group-hover:border-transparent' />
			<Body classTitle='group-hover:underline' />
		</div>
	);
};

export default Card;
