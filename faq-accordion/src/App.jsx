import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { frontendFAQ } from './data/data';

function App() {
	const [openIndexParent, setOpenIndexParent] = useState(null);

	const toggleParent = (index) => {
		setOpenIndexParent(openIndexParent === index ? null : index);
	};

	return (
		<div className='max-w-[360px] bg-white flex flex-col'>
			{frontendFAQ.map((item, index) => {
				const isOpenParent = openIndexParent === index;
				return (
					<details
						key={index}
						open={isOpenParent}
						className=' border-b-1 border-slate-200 last:border-0'>
						<summary
							onClick={(e) => {
								e.preventDefault();
								toggleParent(index);
							}}
							className={`font-bold w-full flex justify-between p-3 gap-x-3  select-none cursor-pointer ${
								isOpenParent ? ' bg-sky-500 ' : 'bg-white'
							}`}>
							<h2
								className={`${
									isOpenParent ? 'text-white' : 'text-slate-700'
								} font-bold`}>
								{item.title}
							</h2>
							<span
								className={`${
									isOpenParent
										? 'bg-sky-600 text-white'
										: 'bg-slate-200 text-slate-600'
								} rounded-full p-1 h-fit `}>
								{isOpenParent ? <BiMinus /> : <BiPlus />}
							</span>
						</summary>
						<div className='flex flex-col gap-y-2 p-3 text-slate-800'>
							<p className='text-sm'>{item.content}</p>
						</div>
					</details>
				);
			})}
		</div>
	);
}

export default App;
