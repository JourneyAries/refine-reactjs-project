import { useState } from 'react';
import FormInput from './components/FormInput';
import Header from './components/Header';
import TableHolidays from './components/TableHolidays';

function App() {
	const [selectedCode, setSelectedCode] = useState('DE');
	return (
		<main className='max-w-[360px] m-auto px-3 py-8 flex flex-col gap-y-5 bg-white [&>*]:select-none'>
			<Header />
			<FormInput
				selectedCode={selectedCode}
				setSelectedCode={setSelectedCode}
			/>
			<TableHolidays selectedCode={selectedCode} />
		</main>
	);
}

export default App;
