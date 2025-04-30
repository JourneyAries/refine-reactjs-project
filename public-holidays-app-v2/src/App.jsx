import FormInput from './components/FormInput';
import Header from './components/Header';
import TableHolidays from './components/TableHolidays';

function App() {
	return (
		<main className='max-w-[360px] m-auto px-3 py-8 flex flex-col gap-y-5 bg-white [&>*]:select-none'>
			<Header />
			<FormInput />
			<TableHolidays />
		</main>
	);
}

export default App;
