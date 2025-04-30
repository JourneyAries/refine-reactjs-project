import React from 'react';
import SelectCountry from './SelectCountry';
import SelectYear from './SelectYear';

const FormInput = () => {
	return (
		<form className='flex gap-x-3'>
			<SelectCountry />
			<SelectYear />
		</form>
	);
};

export default FormInput;
