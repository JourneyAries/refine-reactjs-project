import { PiCaretDown } from 'react-icons/pi';
import { TbCalendarCheck, TbWorldCheck } from 'react-icons/tb';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [tempCountry, setTempCountry] = useState('DE');
	const [tempYear, setTempYear] = useState(2025);
	const [countries, setCountries] = useState([]);
	const [data, setData] = useState([]);

	const listYear = [20, 21, 22, 23, 24, 25, 26];
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [getHolidays, getCountries] = await Promise.all([
					axios.get(
						`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${tempCountry}&validFrom=${tempYear}-01-01&validTo=${tempYear}-12-31&languageIsoCode=EN`,
					),
					axios.get('https://openholidaysapi.org/Countries'),
				]);
				setData(getHolidays.data);
				setCountries(getCountries.data);
			} catch (error) {
				console.error('Error fetching holidays:', error);
				setData([]);
				setCountries([]);
			}
		};
		fetchData();
	}, [tempCountry, tempYear]);
	return (
		<div className='max-w-[360px] px-3 py-8 bg-white flex flex-col gap-4'>
			{/* Title */}
			<h1 className='font-bold text-xl text-slate-900 '>
				<span className='text-sky-600'>Public</span> Holidays
			</h1>
			{/* Title - End */}

			{/* Selected Form */}
			<form className='flex gap-3'>
				{/* Selected Country */}
				<div className='flex grow gap-2 justify-between p-2 border border-slate-300 items-center rounded-sm hover:bg-slate-100'>
					<div className='flex w-full gap-2 items-center'>
						<TbWorldCheck className='text-slate-600 shrink-0' />
						<select
							value={tempCountry}
							onChange={(e) => setTempCountry(e.target.value)}
							className='w-full appearance-none'>
							{countries.map((country, index) => {
								return (
									<option key={index} value={country.isoCode}>
										{country.isoCode}
									</option>
								);
							})}
						</select>
					</div>
					<PiCaretDown className='text-slate-600' />
				</div>
				{/* Selected Country - End */}

				{/* Selected Year */}
				<div className='w-[108px] justify-between flex gap-2 p-2 border border-slate-300 items-center rounded-sm hover:bg-slate-100'>
					<div className='flex w-full gap-2 items-center'>
						<TbCalendarCheck className='text-slate-600 shrink-0' />
						<select
							value={tempYear}
							onChange={(e) => setTempYear(Number(e.target.value))}
							className='w-full appearance-none'>
							{listYear.map((year, index) => {
								return (
									<option key={index} value={2000 + year}>
										{2000 + year}
									</option>
								);
							})}
						</select>
					</div>
					<PiCaretDown className='text-slate-600' />
				</div>
				{/* Selected Year - End */}
			</form>
			{/* Selected Form - End */}

			{/* Table */}
			<table className='w-full'>
				<thead className='[&>tr>th]:pb-2 [&>tr>th]:px-2 [&>tr>th]:font-normal text-left text-sm text-slate-500'>
					<tr>
						<th>Date</th>
						<th>Holidays</th>
					</tr>
				</thead>
				<tbody className='rounded-sm overflow-clip [&>tr]:odd:bg-slate-100 [&>tr]:hover:bg-sky-500'>
					{data?.map((holiday, index) => {
						return (
							<tr
								key={index}
								className='[&>td]:px-2 [&>td]:py-2 cursor-pointer hover:text-white'>
								<td>{holiday.startDate}</td>
								<td className='font-bold'>{holiday.name[0].text}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* Table - End */}
		</div>
	);
}

export default App;
