import React from 'react';

const Header = () => {
	return (
		<div className='flex justify-between items-center w-full'>
			{/* title */}
			<h1 className='text-xl font-bold text-slate-700'>
				<span className='text-sky-600'>Memory</span> Game
			</h1>

			{/* restart button */}
			<button
				onClick={() => {}}
				className='rounded-full border px-3 py-1 border-slate-300 font-bold text-slate-700'>
				Restart Game
			</button>
		</div>
	);
};

export default Header;
