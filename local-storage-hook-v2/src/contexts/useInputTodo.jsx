import React, { createContext, useMemo, useContext, useState } from 'react';

const InputTodoContext = createContext();

export const InputTodoProvider = ({ children }) => {
	const [inputTodo, setInputTodo] = useState('');
	const [todoData, setTodoData] = useState([]);

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setInputTodo(inputValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputTodo.trim()) {
			setTodoData([
				...todoData,
				{
					id: Date.now(),
					text: inputTodo,
					checked: false,
				},
			]);
			setInputTodo('');
		}
	};

	// ! CRUD
	// update
	const toggleComplete = (id) => {
		setTodoData(
			todoData.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item,
			),
		);
	};

	// delete
	const toggleDelete = (id) => {
		setTodoData(todoData.filter((item) => item.id !== id));
	};

	const value = useMemo(
		() => ({
			inputTodo,
			todoData,
			handleChange,
			handleSubmit,
			setInputTodo,
			toggleComplete,
			toggleDelete,
		}),
		[inputTodo, todoData],
	);

	return (
		<InputTodoContext.Provider value={value}>
			{children}
		</InputTodoContext.Provider>
	);
};

export const useInputTodo = () => {
	const context = useContext(InputTodoContext);
	if (!context) {
		throw new Error('useInputTodo must be used within InputTodoProvider');
	}
	return context;
};
