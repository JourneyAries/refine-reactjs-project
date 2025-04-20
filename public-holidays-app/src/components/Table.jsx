import React from 'react';
import { useAppContext } from '../context/AppContext';

const Table = () => {
	const { data } = useAppContext();

	return (
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
							<td className='font-bold'>{holiday.name[0]?.text}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
