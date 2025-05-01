import React from 'react';
import TodoRow from './TodoRow';

const TodoList = () => {
	return (
		<div className='flex flex-col gap-y-2'>
			<TodoRow />
		</div>
	);
};

export default TodoList;
