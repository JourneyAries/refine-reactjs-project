import React from 'react';
import { format, parseISO } from 'date-fns';

const TableRow = ({ holiday }) => {
	return (
		<tr className='text-slate-900 [&>*]:px-2 [&>*]:py-1 group hover:[&>*]:text-white hover:[&>*]:bg-sky-500 hover:[&>*]:italic cursor-pointer'>
			<td className='w-[36%] group-hover:font-bold'>
				{format(parseISO(holiday.startDate), 'MMM d, yyyy')}
			</td>
			<td className='w-[60%] font-bold'>
				{holiday?.name?.[0]?.text || 'Unknown holiday'}
			</td>
		</tr>
	);
};

export default TableRow;
