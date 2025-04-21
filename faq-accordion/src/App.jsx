import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { frontendFAQ } from './data/data';

function App() {
	const [openItems, setOpenItems] = useState({
		parent: null,
		child: null,
	});

	const toggleParent = (index) => {
		setOpenItems((prev) => ({
			parent: prev.parent === index ? null : index,
			child: null,
		}));
	};

	const toggleChild = (parentIndex, childIndex) => {
		setOpenItems((prev) => ({
			parent: parentIndex,
			child: prev.child === childIndex ? null : childIndex,
		}));
	};

	return (
		<div className='max-w-[360px] bg-white flex flex-col'>
			{frontendFAQ.map((item, parentIndex) => {
				const isParentOpen = openItems.parent === parentIndex;
				return (
					<div
						key={`parent-${parentIndex}`}
						className='border-b-1 border-slate-200 last:border-0'>
						<div
							onClick={() => toggleParent(parentIndex)}
							className={`font-bold w-full flex justify-between p-3 gap-x-3 select-none cursor-pointer ${
								isParentOpen
									? 'bg-sky-500 text-white'
									: 'bg-white text-slate-700'
							}`}>
							<h2 className='font-bold'>{item.title}</h2>
							<span
								className={`${
									isParentOpen
										? 'bg-sky-600 text-white'
										: 'bg-slate-200 text-slate-600'
								} rounded-full p-1 h-fit`}>
								{isParentOpen ? <BiMinus /> : <BiPlus />}
							</span>
						</div>

						{isParentOpen && (
							<div className='flex flex-col gap-y-2 p-3 text-slate-800'>
								<p className='text-sm'>{item.content}</p>
								{item.children?.map((child, childIndex) => {
									const isChildOpen = openItems.child === childIndex;
									return (
										<div
											key={`child-${parentIndex}-${childIndex}`}
											className='border-b-1 border-slate-200 last:border-0'>
											<div
												onClick={(e) => {
													e.stopPropagation();
													toggleChild(parentIndex, childIndex);
												}}
												className={`font-bold w-full flex justify-between p-3 gap-x-3 select-none cursor-pointer ${
													isChildOpen ? 'bg-sky-500 text-white' : 'bg-slate-100'
												}`}>
												<h2>{child.title}</h2>
												<span
													className={`${
														isChildOpen
															? 'bg-sky-600 text-white'
															: 'bg-slate-200 text-slate-600'
													} rounded-full p-1 h-fit`}>
													{isChildOpen ? <BiMinus /> : <BiPlus />}
												</span>
											</div>
											{isChildOpen && (
												<div className='p-3 text-slate-800 bg-slate-50'>
													<p className='text-sm'>{child.content}</p>
												</div>
											)}
										</div>
									);
								})}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default App;
