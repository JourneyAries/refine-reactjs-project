import React from 'react';
import { SelectCountryProvider } from './useSelectCountry';
import { SelectYearProvider } from './useSelectYear';

export const AllProvider = ({ children }) => {
	return (
		<SelectCountryProvider>
			<SelectYearProvider>{children}</SelectYearProvider>
		</SelectCountryProvider>
	);
};
