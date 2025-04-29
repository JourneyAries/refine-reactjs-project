import React, { useState } from 'react';
import Header from './header/Header';
import Cards from './cards/Cards';

const Todo = ({ cards }) => {
	return (
		<div className='flex flex-col py-4 px-3 gap-y-4 bg-slate-100 rounded'>
			<Header count={cards.length} />
			{cards.map((card) => (
				<Cards key={card.id} {...card} />
			))}
		</div>
	);
};

export default Todo;
