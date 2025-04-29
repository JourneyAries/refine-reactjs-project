import React from 'react';
import Profile from './Profile';

const Responsible = ({ name }) => {
	return (
		<div className='flex gap-x-2 items-center'>
			<Profile name={name} />
			<h4 className='font-bold text-xs text-slate-900'>{name}</h4>
		</div>
	);
};

export default Responsible;
