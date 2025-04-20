import { useState } from 'react';

export const useDropdownState = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handlers = {
		onMouseDown: () => setIsOpen(true),
		onMouseLeave: () => setIsOpen(false),
		onBlur: () => setIsOpen(false),
	};

	return [isOpen, handlers];
};
