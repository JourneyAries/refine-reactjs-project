import { BiMouse, BiStar, BiTime } from 'react-icons/bi';
import { MdOutlineRestartAlt } from 'react-icons/md';
import { images } from './data/data';
import { useState } from 'react';
import { useTimer } from 'use-timer';
import _ from 'lodash';

function App() {
	const [flippedCards, setFlippedCards] = useState([]);
	const [matchedCards, setMatchedCards] = useState([]);
	const [isHit, setIsHit] = useState(0);
	const [isScore, setIsScore] = useState(0);
	const [shuffledImages] = useState(() => _.shuffle([...images]));

	const handlerClick = (index) => {
		//peraturan awal
		if (
			flippedCards.includes(index) ||
			matchedCards.includes(index) ||
			flippedCards.length >= 2
		) {
			return;
		}
		start();
		setIsHit((prev) => prev + 1);

		const newFlipped = [...flippedCards, index];
		setFlippedCards(newFlipped);

		//cek jika 2 kartu terbuka
		if (newFlipped.length === 2) {
			//cek kesamaan gambar
			if (shuffledImages[newFlipped[0]] === shuffledImages[newFlipped[1]]) {
				const newMatchedCards = [...matchedCards, ...newFlipped];
				setMatchedCards(newMatchedCards);
				setIsScore((prev) => prev + 1);
				setFlippedCards([]);
			} else {
				setTimeout(() => setFlippedCards([]), 1000);
			}
		}
	};

	const {
		time,
		start,
		reset: resetTimer,
	} = useTimer({
		interval: 1000,
		initialTime: 0,
		timerType: 'INCREMENTAL',
		startImmediately: true,
	});

	const resetGame = () => {
		setFlippedCards([]);
		setMatchedCards([]);
		setIsHit(0);
		setIsScore(0);
		resetTimer();
	};

	return (
		<div className='max-w-[360px] m-auto bg-white px-4 py-8 flex flex-col gap-4 rounded-sm'>
			{/* title */}
			<h1 className='text-xl text-slate-900 font-bold textce'>
				<span className='text-sky-600'>Memory</span> Game
			</h1>

			{/* status */}
			<div className='flex items-center justify-between'>
				{/* score */}
				<div className='flex items-center gap-x-1'>
					<BiStar className='text-slate-600' />
					<p className='text-slate-800'>{`Score: ${isScore}`}</p>
				</div>
				{/* hits */}
				<div className='flex items-center gap-x-1'>
					<BiMouse className='text-slate-600' />
					<p className='text-slate-800'>{`Hits : ${isHit}`}</p>
				</div>
				{/* time */}
				<div className='flex items-center gap-x-1'>
					<BiTime className='text-slate-600' />
					<p className='text-slate-800'>{`Time: ${time}s`}</p>
				</div>
			</div>

			{/* game */}
			<div className='grid gap-4 grid-cols-4'>
				{shuffledImages.map((image, imageIndex) => (
					<div
						onClick={() => handlerClick(imageIndex)}
						className={` rounded-sm overflow-hidden w-[70px] h-[70px]`}>
						{flippedCards.includes(imageIndex) ||
						matchedCards.includes(imageIndex) ? (
							<img
								className='object-cover w-[70px] h-[70px] object-center'
								src={image}
							/>
						) : (
							<div className='bg-slate-300 hover:bg-teal-300 w-full h-full'></div>
						)}
					</div>
				))}
			</div>

			{/* button reset button */}
			<button
				onClick={() => resetGame()}
				className='text-sm w-fit p-2 flex gap-1 items-center bg-slate-300 text-slate-900 rounded-sm hover:bg-slate-400'>
				<MdOutlineRestartAlt />
				Restart Game
			</button>
		</div>
	);
}

export default App;
