import { useEffect } from 'react';
import { fetchData } from './api';
import Title from './components/Title';
import Form from './components/Form';
import { useAppContext } from './context/AppContext';
import Table from './components/Table';

function App() {
	//declaration
	const { tempCountry, tempYear, setCountries, setData } = useAppContext();

	// useEffect
	useEffect(() => {
		fetchData(tempCountry, tempYear, { setData, setCountries });
	}, [tempCountry, tempYear]);

	return (
		<div className='max-w-[360px] px-3 py-8 bg-white flex flex-col gap-4'>
			<Title />
			<Form />
			<Table />
		</div>
	);
}

export default App;
