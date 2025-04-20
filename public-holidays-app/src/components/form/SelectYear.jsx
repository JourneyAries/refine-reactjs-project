import { useAppContext } from '../../context/AppContext';
import { useDropdownState } from '../../hooks/useDropdownState';
import { PiCaretDown } from 'react-icons/pi';
import { TbCalendarCheck } from 'react-icons/tb';

const selectYear = () => {
	const listYear = [20, 21, 22, 23, 24, 25, 26];

	const { tempYear, setTempYear } = useAppContext();
	const { isOpenYear, yearHandlers } = useDropdownState();

	return (
		<div className='w-[108px] flex items-center gap-2 relative'>
			<TbCalendarCheck className='absolute z-[1] left-2 text-slate-600' />
			<select
				{...yearHandlers}
				className='relative appearance-none w-full px-8 py-2 border border-slate-300 rounded-sm hover:bg-slate-100'
				value={tempYear}
				onChange={(e) => setTempYear(e.target.value)}>
				{listYear.map((year, index) => {
					return (
						<option key={index} value={2000 + year}>
							{2000 + year}
						</option>
					);
				})}
			</select>
			<PiCaretDown
				className={`absolute z-[1] right-2 text-slate-600 transition-transform duration-300 ease-in-out ${
					isOpenYear ? 'rotate-180' : ''
				}`}
			/>
		</div>
	);
};

export default selectYear;
