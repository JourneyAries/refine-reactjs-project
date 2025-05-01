import React, { useState } from 'react';
import AccordionRow from './AccordionRow';
import { reactFAQ } from '../data/data';

const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='[&>*]:last:border-0 flex flex-col rounded-sm border overflow-clip bg-white border-slate-200 shadow-xs'>
			{reactFAQ.map((item, index) => (
				<AccordionRow
					key={index}
					question={item.question}
					answer={item.answer}
					index={index}
					isOpen={openIndex === index}
					handleToggle={handleToggle}
				/>
			))}
		</div>
	);
};

export default Accordion;
