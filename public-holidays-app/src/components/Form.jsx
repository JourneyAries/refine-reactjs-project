import React from 'react';
import SelectCountry from './form/SelectCountry';
import SelectYear from './form/SelectYear';

const Form = () => {
	return (
		<form className='flex gap-3'>
			<SelectCountry />
			<SelectYear />
		</form>
	);
};

export default Form;
