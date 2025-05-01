import React from 'react';
import { BiCaretRight } from 'react-icons/bi';
import AccordionChild from './AccordionChild';

const AccordionRow = ({
	item,
	question,
	answer,
	index,
	toggleParent,
	toggleChild,
	isParentOpen,
	isChildOpen,
}) => {
	return (
		<div
			className={`border-b border-slate-200 transition duration-300 [&>*]:select-none hover:opacity-100 ${
				isParentOpen ? '' : 'opacity-60'
			}`}>
			<div
				onClick={() => toggleParent(index)}
				className='cursor-pointer p-2 flex gap-x-2'>
				{/* icon caret */}
				<div className='h-6 flex items-center'>
					<BiCaretRight
						className={`transition duration-300 ease-in-out ${
							isParentOpen ? 'rotate-90' : 'rotate-0'
						}`}
					/>
				</div>
				<h1 className='text-slate-900 font-bold'>{question}</h1>
			</div>
			{isParentOpen && (
				<div className='pr-3 pb-3 pl-3 flex flex-col gap-y-4'>
					<p className='text-sm text-slate-700'>{answer}</p>
					{item.subQuestions && (
						<div className='[&>*]:last:border-0 flex flex-col rounded-sm border overflow-clip bg-white border-slate-200 shadow-xs'>
							{item.subQuestions?.map((subItem, childIndex) => (
								<AccordionChild
									key={childIndex}
									childIndex={childIndex}
									toggleChild={toggleChild}
									isChildOpen={isChildOpen === childIndex}
									question={subItem.question}
									answer={subItem.answer}
								/>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default AccordionRow;
