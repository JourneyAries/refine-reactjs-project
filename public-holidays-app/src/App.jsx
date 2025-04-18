import { PiCaretDown } from 'react-icons/pi';
import { TbCalendarCheck, TbWorldCheck } from 'react-icons/tb';

function App() {
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
					<div className='flex grow gap-2 items-center'>
						<TbWorldCheck className='text-slate-600' />
						<select className='appearance-none'>
							<option value=''>Netherlands (the)</option>
						</select>
					</div>
					<PiCaretDown className='text-slate-600' />
				</div>
				{/* Selected Country - End */}

				{/* Selected Year */}
				<div className='w-[108px] flex gap-2 p-2 border border-slate-300 items-center rounded-sm hover:bg-slate-100'>
					<div className='flex gap-2 items-center'>
						<TbCalendarCheck className='text-slate-600 text-xl' />
						<select name='' className='w-full appearance-none'>
							<option value=''>2025</option>
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
					<tr className='[&>td]:px-2 [&>td]:py-2 cursor-pointer hover:text-white'>
						<td>January 1</td>
						<td className='font-bold'>News Year's Day</td>
					</tr>
				</tbody>
			</table>
			{/* Table - End */}
		</div>
	);
}

export default App;
