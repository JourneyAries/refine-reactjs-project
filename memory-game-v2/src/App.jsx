import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { AllProvider } from './contexts';

function App() {
	return (
		<AllProvider>
			<main className='max-w-[360px] bg-white px-4 py-8 flex gap-y-8 [&>*]:select-none flex-col'>
				<Header />
				<Body />
				<Footer />
			</main>
		</AllProvider>
	);
}

export default App;
