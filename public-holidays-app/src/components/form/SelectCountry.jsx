import React from 'react';
import { PiCaretDown } from 'react-icons/pi';
import { TbWorldCheck } from 'react-icons/tb';
import { useDropdownState } from '../../hooks/useDropdownState';
import { useAppContext } from '../../context/AppContext';

const SelectCountry = () => {
	const { tempCountry, setTempCountry, countries } = useAppContext();
	const [isOpenCountry, countryHandlers] = useDropdownState();

	return (
		<div className='flex grow items-center gap-2 relative'>
			<TbWorldCheck className='absolute z-[1] left-2 text-slate-600' />
			<select
				{...countryHandlers}
				className='relative appearance-none w-full px-8 py-2 border border-slate-300 rounded-sm hover:bg-slate-100'
				value={tempCountry}
				onChange={(e) => setTempCountry(e.target.value)}>
				{countries.map((country, index) => {
					return (
						<option key={index} value={country.isoCode}>
							{`${country.name?.[0].text} (${country.isoCode})`}
						</option>
					);
				})}
			</select>
			<PiCaretDown
				className={`absolute z-[1] right-2 text-slate-600 transition-transform duration-300 ease-in-out ${
					isOpenCountry ? 'rotate-180' : ''
				}`}
			/>
		</div>
	);
};

export default SelectCountry;
