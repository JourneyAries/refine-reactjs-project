import React from 'react';

const Footer = () => {
	return (
		<div className='flex gap-x-3'>
			{/* hits */}
			<div className='flex items-center justify-between w-full rounded-sm px-2 py-1 bg-slate-200'>
				<p className='text-xs font-bold text-slate-500'>Hits</p>
				<p className='font-bold text-slate-700'>8</p>
			</div>
			{/* match */}
			<div className='flex items-center justify-between w-full rounded-sm px-2 py-1 bg-slate-200'>
				<p className='text-xs font-bold text-slate-500'>Match</p>
				<p className='font-bold text-slate-700'>8</p>
			</div>
			{/* time */}
			<div className='flex items-center justify-between w-full rounded-sm px-2 py-1 bg-slate-200'>
				<p className='text-xs font-bold text-slate-500'>Time</p>
				<p className='font-bold text-slate-700'>0:25</p>
			</div>
		</div>
	);
};

export default Footer;
