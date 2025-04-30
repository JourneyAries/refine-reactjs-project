import React, { useEffect, useState } from 'react';
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';
import { TbWorldCheck } from 'react-icons/tb';
import { getCountries } from '../api';

const SelectCountry = ({ selectedCode, setSelectedCode }) => {
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

	return (
		<div className='w-full relative gap-x-2 flex items-center'>
			<TbWorldCheck className='absolute text-slate-600 left-2' />
			<select
				type='text'
				value={selectedCode}
				onChange={handleChange}
				onClick={() => {
					setOpen(true);
				}}
				onMouseLeave={() => setOpen(false)}
				className='select-none w-full appearance-none pt-2 pr-8 pb-2 pl-[30px] border border-slate-300 text-slate-900 text-sm font-medium rounded cursor-pointer'>
				{countries.map((country) => (
					<option key={country.isoCode} value={country.isoCode}>
						{`${country.name[0].text} (${country.isoCode})`}
					</option>
				))}
			</select>

			<PiCaretDown
				className={`text-slate-900 absolute right-2 transition ease-in-out duration-100 ${
					open ? 'rotate-180' : ''
				}`}
			/>
		</div>
	);
};

export default SelectCountry;
