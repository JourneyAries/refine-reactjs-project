import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { v4 as generateId } from 'uuid';

const Form = ({ onAddTask }) => {
	const [inputTitle, setInputTitle] = useState('');
	const [inputDesc, setInputDesc] = useState('');
	const [inputResponsible, setInputResponsible] = useState('');
	const [inputHashtag, setInputHashtag] = useState('');

	const handleHashtagChange = (e) => {
		let value = e.target.value;

		value = value.replace(/,+/g, ',');

		if (value.startsWith(',')) {
			value = value.substring(1);
		}

		const tags = value.split(',').filter((tag) => tag.trim().length > 0);

		if (tags.length > 3) {
			value = tags.slice(0, 3).join(',');
		}

		if (value.endsWith(' ')) {
			const processedValue = value.trim() + ',';
			setInputHashtag(processedValue);
		} else {
			setInputHashtag(value);
		}
	};

	// submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputTitle.trim()) {
			const newtask = {
				id: generateId(),
				title: inputTitle,
				description: inputDesc,
				responsible: inputResponsible,
				hashtag: inputHashtag.split(',').map((tag) => tag.trim()),
			};

			// send data
			onAddTask(newtask);

			// reset form
			setInputTitle('');
			setInputDesc('');
			setInputResponsible('');
			setInputHashtag('');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-y-2 [&>*]:cursor-pointer'>
			{/* title */}
			<input
				type='text'
				value={inputTitle}
				onChange={(e) => setInputTitle(e.target.value)}
				placeholder='Title*'
				required
				className='rounded border py-2 px-3 text-slate-500 border-slate-300 text-sm'
			/>
			{/* description */}
			<input
				type='text'
				value={inputDesc}
				onChange={(e) => setInputDesc(e.target.value)}
				placeholder='Description?'
				className='rounded border py-2 px-3 text-slate-500 border-slate-300 text-sm'
			/>
			{/* responsible */}
			<input
				type='text'
				value={inputResponsible}
				onChange={(e) => setInputResponsible(e.target.value)}
				placeholder='Responsible?'
				className='rounded border py-2 px-3 text-slate-500 border-slate-300 text-sm'
			/>
			{/* Hashtag */}
			<input
				type='text'
				value={inputHashtag}
				onChange={handleHashtagChange}
				placeholder='Hashtag (pisahkan dengan koma)'
				className='rounded border py-2 px-3 text-slate-500 border-slate-300 text-sm'
			/>
			<div className='flex flex-wrap gap-1'>
				{inputHashtag.split(',').map(
					(tag, i) =>
						tag.trim() && (
							<span key={i} className='bg-violet-100 px-2 rounded'>
								#{tag.trim()}
							</span>
						),
				)}
			</div>
			{/* button */}
			<button
				type='submit'
				className='rounded py-3 px-2 gap-1 bg-violet-800 text-white text-sm flex justify-center items-center hover:bg-violet-900'>
				<AiOutlinePlusCircle />
				Add Task
			</button>
		</form>
	);
};

export default Form;
