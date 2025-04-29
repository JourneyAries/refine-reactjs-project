import React from 'react';

const Counter = ({ count }) => {
	return (
		<div className='cursor-pointer px-2 py-[2px] bg-slate-200 text-slate-500 text-sm font-bold w-fit rounded'>
			{count}
		</div>
	);
};

export default Counter;
