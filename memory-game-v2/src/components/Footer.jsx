import React from 'react';
import { useMain } from '../contexts/useMain';

const Footer = () => {
	const { time, hits, match } = useMain();
	return (
		<div className='flex gap-x-3'>
			{/* hits */}
			<div className='flex items-center justify-between w-full rounded-sm px-2 py-1 bg-slate-200'>
				<p className='text-xs font-bold text-slate-500'>Hits</p>
				<p className='font-bold text-slate-700'>{hits}</p>
			</div>
			{/* match */}
			<div className='flex items-center justify-between w-full rounded-sm px-2 py-1 bg-slate-200'>
				<p className='text-xs font-bold text-slate-500'>Match</p>
				<p className='font-bold text-slate-700'>{match}</p>
			</div>
			{/* time */}
			<div className='flex items-center justify-between w-full rounded-sm px-2 py-1 bg-slate-200'>
				<p className='text-xs font-bold text-slate-500'>Time</p>
				<p className='font-bold text-slate-700'>{time}</p>
			</div>
		</div>
	);
};

export default Footer;
