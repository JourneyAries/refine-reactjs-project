import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import { AllProvider } from './contexts';

function App() {
	return (
		<AllProvider>
			<div className='max-w-[360px] px-3 py-8 flex flex-col gap-y-4 bg-white [&>*]:select-none m-auto'>
				<Header />
				<InputTodo />
				<TodoList />
			</div>
		</AllProvider>
	);
}

export default App;
