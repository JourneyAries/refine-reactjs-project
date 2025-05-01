import React, { useState } from 'react';
import AccordionRow from './AccordionRow';
import { reactFAQ } from '../data/data';

const Accordion = () => {
	const [openIndex, setOpenIndex] = useState({
		parent: null,
		child: null,
	});

	const toggleParent = (index) => {
		setOpenIndex((prev) => ({
			parent: prev.parent === index ? null : index,
			child: null,
		}));
	};

	const toggleChild = (childIndex) => {
		setOpenIndex((prev) => ({
			...prev,
			child: prev.child === childIndex ? null : childIndex,
		}));
	};

	return (
		<div className='[&>*]:last:border-0 flex flex-col rounded-sm border overflow-clip bg-white border-slate-200 shadow-xs'>
			{reactFAQ.map((item, index) => (
				<AccordionRow
					key={index}
					item={item}
					question={item.question}
					answer={item.answer}
					index={index}
					isParentOpen={openIndex.parent === index}
					isChildOpen={openIndex.parent === index ? openIndex.child : null}
					toggleParent={toggleParent}
					toggleChild={toggleChild}
				/>
			))}
		</div>
	);
};

export default Accordion;
