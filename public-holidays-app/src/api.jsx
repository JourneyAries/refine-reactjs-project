import axios from 'axios';

export const fetchData = async (tempCountry, tempYear, setters) => {
	try {
		const [getHolidays, getCountries] = await Promise.all([
			axios.get(
				`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${tempCountry}&validFrom=${tempYear}-01-01&validTo=${tempYear}-12-31&languageIsoCode=EN`,
			),
			axios.get('https://openholidaysapi.org/Countries'),
		]);
		setters.setData(getHolidays.data);
		setters.setCountries(getCountries.data);
	} catch (error) {
		console.error('Error fetching holidays:', error);
		setters.setData([]);
		setters.setCountries([]);
	}
};
