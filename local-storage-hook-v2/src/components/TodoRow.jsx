import React from 'react';
import { BiCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { useInputTodo } from '../contexts/useInputTodo';

const TodoRow = ({ todo }) => {
	const { toggleComplete, toggleDelete } = useInputTodo();

	return (
		<div className='p-2 rounded border border-slate-300 flex gap-x-1 items-center'>
			{todo.checked ? (
				<BiSolidCheckboxChecked
					onClick={() => toggleComplete(todo.id)}
					className='text-sky-500 text-3xl cursor-pointer'
				/>
			) : (
				<BiCheckbox
					onClick={() => toggleComplete(todo.id)}
					className='text-slate-300 text-3xl cursor-pointer'
				/>
			)}
			<p
				className={`w-full text-slate-600 ${
					todo.checked ? 'line-through' : ''
				}`}>
				{todo.text}
			</p>
			<CgClose
				onClick={() => toggleDelete(todo.id)}
				className='text-slate-500 text-xl cursor-pointer'
			/>
		</div>
	);
};

export default TodoRow;
