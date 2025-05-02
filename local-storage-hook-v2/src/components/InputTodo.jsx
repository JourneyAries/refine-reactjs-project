import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useInputTodo } from '../contexts/useInputTodo';

const InputTodo = () => {
	const { inputTodo, handleChange, handleSubmit } = useInputTodo();
	return (
		<form onSubmit={handleSubmit} className='flex gap-x-3'>
			<input
				className='w-full p-2 border-b border-slate-300 text-slate-600 focus:outline-0 focus:border-b-sky-500 focus:border-b-2'
				type='text'
				value={inputTodo}
				onChange={handleChange}
				placeholder='Add a new todo'
			/>
			<button
				className='rounded p-2 bg-slate-700 hover:bg-sky-600'
				type='submit'>
				<AiOutlinePlus className='text-xl text-white' />
			</button>
		</form>
	);
};

export default InputTodo;
