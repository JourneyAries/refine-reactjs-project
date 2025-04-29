import React from 'react';
import Counter from './Counter';
import BtnAddTask from './BtnAddTask';

const Header = ({ count }) => {
	return (
		<div className='flex justify-between'>
			<div className='flex gap-x-2'>
				<h2>To-do</h2>
				<Counter count={count} />
			</div>
			<BtnAddTask />
		</div>
	);
};

export default Header;
