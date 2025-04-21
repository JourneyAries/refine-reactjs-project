import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { BiCheckCircle } from 'react-icons/bi';

function App() {
	//state management
	const [inputValue, setInputValue] = useState('');
	const [todoList, setTodoList] = useLocalStorage('todoList', []);

	//handler submit
	const handlerSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			setTodoList([
				...todoList,
				{ id: nanoid(), list: inputValue, status: 'unchecked' },
			]);
			setInputValue('');
		}
	};

	return (
		<div className='max-w-[360px] px-3 py-8 bg-white flex flex-col gap-y-4'>
			{/* title */}
			<h1 className='text-xl font-bold'>
				Todo List <span className='text-sky-600'>App</span>
			</h1>

			{/* input user */}
			<form className='flex gap-3' onSubmit={handlerSubmit}>
				<div className='w-full relative'>
					<BiCheckCircle className='absolute left-5 top-1/2 transform -translate-1/2 text-xl text-slate-600' />
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='relative w-full pl-9 border border-slate-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent'
						type='text'
						placeholder='Add a new todo'
					/>
				</div>
				<button
					className='cursor-pointer p-2 rounded-sm bg-slate-400 text-sm whitespace-nowrap'
					type='submit'>
					Add List
				</button>
			</form>

			{/* body */}
			<ul>
				{todoList.map((todo, index) => (
					<li
						key={index}
						className='flex items-center gap-1 hover:bg-slate-100 rounded-sm'>
						<input
							type='checkbox'
							checked={todo.status === 'checked'}
							id={todo.id}
							onChange={() => {
								const updatedList = [...todoList];
								updatedList[index].status =
									todo.status === 'checked' ? 'unchecked' : 'checked';
								setTodoList(updatedList);
							}}
							className='absolute left-5'
						/>
						<label
							className='relative pl-7 text-slate-900 select-none w-full px-3 py-1'
							htmlFor={todo.id}>
							{todo.list}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

const useLocalStorage = (keyName, initialValue) => {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(keyName)) || initialValue,
	);

	useEffect(() => {
		localStorage.setItem(keyName, JSON.stringify(value));
	}, [value, keyName]);

	return [value, setValue];
};
