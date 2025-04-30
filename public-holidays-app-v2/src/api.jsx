import axios from 'axios';

export const getCountries = async () => {
	const responses = await axios.get(`${import.meta.env.VITE_COUNTRIES}`);
	return responses.data;
};
