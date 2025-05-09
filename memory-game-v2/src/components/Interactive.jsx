import React from 'react';
import { useMain } from '../contexts/useMain';

const Interactive = ({ num, index }) => {
	const { handleClick, flippedCards, matchedCards } = useMain();
	const isFlipped =
		flippedCards.includes(index) || matchedCards.includes(index);
	return (
		<div
			onClick={() => handleClick(index)}
			className='rounded-full w-[76px] h-[76px] bg-sky-500 font-bold text-white text-5xl flex items-center justify-center cursor-pointer overflow-hidden'>
			{isFlipped ? (
				<div>{num}</div>
			) : (
				<div className='bg-slate-700 w-full h-full hover:bg-sky-300'></div>
			)}
		</div>
	);
};

export default Interactive;
