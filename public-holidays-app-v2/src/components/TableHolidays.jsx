import React from 'react';
import TableRow from './TableRow';

const TableHolidays = () => {
	return (
		<table className='border-collapse'>
			{/* header */}
			<thead>
				<tr className='[&>*]:px-2 [&>*]:pb-2 text-sm [&>*]:font-normal text-slate-500 text-left'>
					<th>Date</th>
					<th>Holiday</th>
				</tr>
			</thead>
			<tbody className='[&>tr]:odd:bg-slate-100'>
				<TableRow />
			</tbody>
		</table>
	);
};

export default TableHolidays;
