import React from 'react';
import { BiCaretRight } from 'react-icons/bi';

const AccordionRow = ({ question, answer, index, isOpen, handleToggle }) => {
	return (
		<div className='border-b border-slate-200 [&>*]:select-none'>
			<div
				onClick={() => handleToggle(index)}
				className='cursor-pointer p-2 flex gap-x-2'>
				{/* icon caret */}
				<div className='h-6 flex items-center'>
					<BiCaretRight />
				</div>
				<h1 className='text-slate-900 font-bold'>{question}</h1>
			</div>
			{isOpen && (
				<p className='pr-3 pb-3 pl-3 flex flex-col gap-y-4 text-sm text-slate-700'>
					{answer}
				</p>
			)}
		</div>
	);
};

export default AccordionRow;
