import React from 'react';
import Title from './Title';
import Form from './Form';

const Header = ({ onAddTask }) => {
	return (
		<div className='flex flex-col gap-y-4'>
			<Title />
			<Form onAddTask={onAddTask} />
		</div>
	);
};

export default Header;
