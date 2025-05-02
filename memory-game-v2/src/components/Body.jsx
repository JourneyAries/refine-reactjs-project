import React from 'react';
import Interactive from './Interactive';
import { numbers } from '../data/data';

const Body = () => {
	return (
		<div className='grid grid-cols-4 gap-2'>
			{numbers.map((num) => (
				<Interactive />
			))}
		</div>
	);
};

export default Body;
