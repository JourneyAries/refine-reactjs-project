import Header from './components/header/Header';
import Body from './components/body/Body';
function App() {
	return (
		<main className='max-w-[400px] py-8 px-4 flex flex-col gap-y-8 bg-white [&>*]:select-none'>
			<Header />
			<Body />
		</main>
	);
}

export default App;
