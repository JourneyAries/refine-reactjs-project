import React, { useState } from 'react';
import { PiCaretDown } from 'react-icons/pi';
import { TbCalendarCheck } from 'react-icons/tb';

const SelectYear = ({selectedYear,setSelectedYear}) => {
	const years = [2023, 2024, 2025, 2026, 2027];
	const [open, setOpen] = useState(false);

	const handleChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedYear(selectedValue);
	};

	return (
		<div className='relative gap-x-2 flex items-center'>
			<TbCalendarCheck className='absolute text-slate-600 left-2' />
			<select
				type='text'
				onChange={handleChange}
				value={selectedYear}
				onClick={() => {
					setOpen(true);
				}}
				onMouseLeave={() => setOpen(false)}
				className=' w-[108px] appearance-none pt-2 pr-8 pb-2 pl-[30px] border border-slate-300 text-slate-900 text-sm font-medium rounded cursor-pointer relative'>
				{years.map((year, index) => (
					<option key={index} value={year}>
						{year}
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

export default SelectYear;
