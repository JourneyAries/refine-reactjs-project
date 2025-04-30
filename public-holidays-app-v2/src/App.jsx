import { useState } from 'react';
import FormInput from './components/FormInput';
import Header from './components/Header';
import TableHolidays from './components/TableHolidays';

function App() {
	const [selectedCode, setSelectedCode] = useState('DE');
	const [selectedYear, setSelectedYear] = useState(2025);

	return (
		<main className='max-w-[360px] m-auto px-3 py-8 flex flex-col gap-y-5 bg-white [&>*]:select-none'>
			<Header />
			<FormInput
				selectedCode={selectedCode}
				setSelectedCode={setSelectedCode}
				selectedYear={selectedYear}
				setSelectedYear={setSelectedYear}
			/>
			<TableHolidays selectedCode={selectedCode} selectedYear={selectedYear}/>
		</main>
	);
}

export default App;
