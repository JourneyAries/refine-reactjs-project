import React from 'react';

const Hashtag = ({ text }) => {
	return (
		<div className='w-fit rounded-sm py-1 px-[6px] bg-violet-100 text-violet-800 text-xs'>
			{`#${text}`}
		</div>
	);
};

export default Hashtag;
