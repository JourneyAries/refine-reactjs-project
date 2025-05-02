import React from 'react';
import { useInputTodo } from '../contexts/useInputTodo';

const Header = () => {
	const { todoData } = useInputTodo();
	return (
		<div className='flex justify-between'>
			{/* title */}
			<h1 className='text-2xl font-bold text-slate-900'>
				<span className='text-sky-600'>Your</span> To Do
			</h1>

			{/* counter */}
			<div className='rounded-sm border border-slate-200 px-3 py-2 text-xs '>
				<span className='font-bold text-slate-600'>{`${todoData.length} `}</span>
				<span className='italic text-slate-400'>remaining</span>
			</div>
		</div>
	);
};

export default Header;
