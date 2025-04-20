import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// declaration
	const [tempCountry, setTempCountry] = useState('DE');
	const [tempYear, setTempYear] = useState(2025);
	const [countries, setCountries] = useState([]);
	const [data, setData] = useState([]);

	return (
		<AppContext.Provider
			value={{
				tempCountry,
				setTempCountry,
				tempYear,
				setTempYear,
				countries,
				setCountries,
				data,
				setData,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context)
		throw new Error('useAppContext must be used within AppProvider');
	return context;
};
