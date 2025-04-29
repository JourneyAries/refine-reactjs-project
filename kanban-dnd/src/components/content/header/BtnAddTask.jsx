import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const BtnAddTask = () => {
	return (
		<button
			type='submit'
			className='rounded-full w-fit border pt-[2px] pb-[2px] pr-2 pl-1 gap-x-1 flex bg-violet-200 border-violet-300 text-violet-800 text-sm items-center cursor-pointer'>
			<AiOutlinePlusCircle />
			Add Task
		</button>
	);
};

export default BtnAddTask;
