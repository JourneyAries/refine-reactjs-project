import React from 'react';
import SelectCountry from './SelectCountry';
import SelectYear from './SelectYear';

const FormInput = ({ selectedCode, setSelectedCode }) => {
	return (
		<form className='flex gap-x-3'>
			<SelectCountry
				selectedCode={selectedCode}
				setSelectedCode={setSelectedCode}
			/>
			<SelectYear />
		</form>
	);
};

export default FormInput;
