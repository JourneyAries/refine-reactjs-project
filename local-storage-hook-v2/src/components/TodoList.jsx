import React from 'react';
import TodoRow from './TodoRow';
import { useInputTodo } from '../contexts/useInputTodo';

const TodoList = () => {
	const { todoData } = useInputTodo();
	return (
		<div className='flex flex-col gap-y-2'>
			{todoData.length > 0 ? (
				todoData.map((todo) => <TodoRow key={todo.id} todo={todo} />)
			) : (
				<p className='text-slate-500 text-center'>No todos yet</p>
			)}
		</div>
	);
};

export default TodoList;
