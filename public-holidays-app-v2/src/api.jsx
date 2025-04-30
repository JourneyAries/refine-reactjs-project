import axios from 'axios';
import { useState } from 'react';

const DEFAULT_CODE = 'DE';

export const getCountries = async () => {
	const responses = await axios.get(`${import.meta.env.VITE_COUNTRIES}`);
	return responses.data;
};

export const getHolidays = async (code) => {
	const countryCode = code || DEFAULT_CODE;
	const responses = await axios.get(
		`${
			import.meta.env.VITE_URL_BASE
		}countryIsoCode=${countryCode}&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=EN`,
	);
	console.info(responses.data);
	return responses.data;
};
