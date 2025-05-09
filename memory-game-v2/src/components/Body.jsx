import React from 'react';
import { useMain } from '../contexts/useMain';

const Body = () => {
	const { renderInteractive } = useMain();
	return <div className='grid grid-cols-4 gap-2'>{renderInteractive()}</div>;
};

export default Body;
