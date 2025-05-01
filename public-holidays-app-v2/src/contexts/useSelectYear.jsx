import React, { useState, createContext, useContext, useMemo } from 'react';

const SelectYearContext = createContext();

export const SelectYearProvider = ({ children }) => {
	const [selectedYear, setSelectedYear] = useState(2025);
	const [open, setOpen] = useState(false);

	const handleChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedYear(selectedValue);
	};

	const toggleOpen = (open) => {
		setOpen(open);
	};

	const value = useMemo(
		() => ({
			selectedYear,
			open,
			handleChange,
			toggleOpen,
		}),
		[selectedYear, open],
	);

	return (
		<SelectYearContext.Provider value={value}>
			{children}
		</SelectYearContext.Provider>
	);
};

export const useSelectYear = () => {
	const context = useContext(SelectYearContext);
	if (!context) {
		throw new Error('useSelectYear must be used within SelectYearProvider');
	}
	return context;
};
