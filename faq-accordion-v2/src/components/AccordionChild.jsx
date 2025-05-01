import React from 'react';
import { BiCaretRight } from 'react-icons/bi';

const AccordionChild = ({
	toggleChild,
	isChildOpen,
	childIndex,
	question,
	answer,
}) => {
	return (
		<div
			className={`border-b border-slate-200 [&>*]:select-none hover:opacity-100 ${
				isChildOpen ? '' : 'opacity-60'
			}`}>
			<div
				onClick={() => toggleChild(childIndex)}
				className='cursor-pointer p-2 flex gap-x-2'>
				{/* icon caret */}
				<div className='h-6 flex items-center'>
					<BiCaretRight
						className={`transition duration-300 ease-in-out ${
							isChildOpen ? 'rotate-90' : 'rotate-0'
						}`}
					/>
				</div>
				<h1 className='text-slate-900 font-bold'>{question}</h1>
			</div>
			{isChildOpen && (
				<p className='pr-3 pb-3 pl-3 flex flex-col gap-y-4 text-sm text-slate-700'>
					{answer}
				</p>
			)}
		</div>
	);
};

export default AccordionChild;
