import { useState } from 'react';
import Todo from './components/content/Todo';
import Header from './components/header/Header';
import { v4 as generateId } from 'uuid';

function App() {
	const [cards, setCards] = useState([
		{
			id: generateId(),
			responsible: 'Maxim Jaders',
			hashtag: ['important', 'technical'],
			title: 'Redesign homepage',
			description: 'Create new layout for main landing page',
			status: 'todo',
		},
		{
			id: generateId(),
			title: 'Fix login bug',
			description: 'User cannot login with Google account',
			status: 'todo',
		},
	]);

	const handleAddTask = (newTask) => {
		const newCard = {
			id: generateId(),
			responsible: newTask.responsible || null,
			hashtag: Array.isArray(newTask.hashtag)
				? newTask.hashtag.filter((tag) => tag && String(tag).trim().length > 0)
				: [],
			title: newTask.title || 'No title',
			description: newTask.description || 'No description',
			status: 'todo',
		};
		setCards([...cards, newCard]);
	};

	return (
		<div className='flex flex-col gap-y-8 py-8 px-4 max-w-[360px] bg-white m-auto'>
			<Header onAddTask={handleAddTask} />
			<Todo cards={cards} />
		</div>
	);
}

export default App;
