import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';

const Header = ({ classVote = '' }) => {
	return (
		<div className='flex justify-between'>
			{/* detail */}
			<div className='flex items-center'>
				<h3 className='text-violet-700 uppercase font-bold'>mooreds</h3>
				<BsDot className='text-slate-400' />
				<p className='text-slate-500'>April 17, 2025</p>
			</div>
			{/* vote */}
			<div
				className={`flex rounded items-center gap-x-1 border p-1 border-violet-300 bg-violet-100 text-violet-800 ${classVote}`}>
				<BiUpvote />
				280+
			</div>
		</div>
	);
};

export default Header;
