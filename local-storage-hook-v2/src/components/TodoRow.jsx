import React from 'react';
import { BiSolidCheckboxChecked } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const TodoRow = () => {
	return (
		<div className='p-2 rounded border border-slate-300 flex gap-x-1 items-center'>
			<BiSolidCheckboxChecked className='text-sky-500 text-3xl cursor-pointer' />
			<p className='w-full text-slate-600'>Task 1</p>
			<CgClose className='text-slate-500 text-xl cursor-pointer' />
		</div>
	);
};

export default TodoRow;
