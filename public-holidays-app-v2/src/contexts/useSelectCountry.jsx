import React, {
	useState,
	useEffect,
	createContext,
	useContext,
	useMemo,
} from 'react';
import { getCountries } from '../api';

const SelectCountryContext = createContext();

export const SelectCountryProvider = ({ children }) => {
	const [selectedCode, setSelectedCode] = useState('DE');
	const [countries, setCountries] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getCountries().then((res) => setCountries(res));
	}, []);

	const handleChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedCode(selectedValue);
		console.info(selectedValue);
	};

	const toggleOpen = (open) => {
		setOpen(open);
	};

	const value = useMemo(
		() => ({
			selectedCode,
			countries,
			open,
			handleChange,
			toggleOpen,
		}),
		[selectedCode, countries, open],
	);

	return (
		<SelectCountryContext.Provider value={value}>
			{children}
		</SelectCountryContext.Provider>
	);
};

export const useSelectCountry = () => {
	const context = useContext(SelectCountryContext);
	if (!context) {
		throw new Error(
			'useSelectCountry must be used within SelectCountryProvider',
		);
	}
	return context;
};
