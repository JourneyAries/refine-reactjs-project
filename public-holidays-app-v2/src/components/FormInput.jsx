import React from 'react';
import SelectCountry from './SelectCountry';
import SelectYear from './SelectYear';

const FormInput = ({
	selectedCode,
	setSelectedCode,
	selectedYear,
	setSelectedYear,
}) => {
	return (
		<form className='flex gap-x-3'>
			<SelectCountry
				selectedCode={selectedCode}
				setSelectedCode={setSelectedCode}
			/>
			<SelectYear
				selectedYear={selectedYear}
				setSelectedYear={setSelectedYear}
			/>
		</form>
	);
};

export default FormInput;
