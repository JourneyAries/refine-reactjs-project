import React, { useEffect, useState } from 'react';

export const useLocalStorage = (keyName, initialValue) => {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(keyName);
		return storedValue ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(keyName, JSON.stringify(value));
	}, [value, keyName]);

	return [value, setValue];
};
