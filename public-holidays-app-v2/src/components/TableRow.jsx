import React from 'react';

const TableRow = () => {
	return (
		<tr className=' text-slate-900 [&>*]:px-2 [&>*]:py-1 group hover:[&>*]:text-white hover:[&>*]:bg-sky-500 hover:[&>*]:italic cursor-pointer'>
			<td className='w-[36%] group-hover:font-bold '>January 1</td>
			<td className='w-[60%] font-bold'>New Year's Day</td>
		</tr>
	);
};

export default TableRow;
