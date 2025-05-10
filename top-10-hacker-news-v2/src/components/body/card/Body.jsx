import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Body = ({ classTitle = '' }) => {
	return (
		<div className='flex gap-x-2 '>
			<h2
				className={`w-full items-start font-bold text-slate-900 text-lg ${classTitle}`}>
				Silicon Valley’s best kept secret: Founder liquidity
			</h2>
			<span className='p-1'>
				<FiArrowUpRight className='text-xl text-slate-600' />
			</span>
		</div>
	);
};

export default Body;
