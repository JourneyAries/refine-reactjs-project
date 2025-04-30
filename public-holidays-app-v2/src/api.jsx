import axios from 'axios';

export const getCountries = async () => {
	const responses = await axios.get(`${import.meta.env.VITE_COUNTRIES}`);
	return responses.data;
};

export const getHolidays = async () => {
	const responses = await axios.get(
		`${
			import.meta.env.VITE_URL_BASE
		}countryIsoCode=DE&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=EN`,
	);
	console.info(responses.data);
};
