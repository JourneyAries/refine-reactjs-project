import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import { getHolidays } from '../api';

const TableHolidays = ({ selectedCode }) => {
	const [holidays, setHolidays] = useState([]);

	useEffect(() => {
		getHolidays(selectedCode).then((res) => setHolidays(res));
	}, [selectedCode]);

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
				{holidays.map((holiday, index) => (
					<TableRow key={index} holiday={holiday} />
				))}
			</tbody>
		</table>
	);
};

export default TableHolidays;
