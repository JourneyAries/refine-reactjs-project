import { BiUpvote } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getTopNews } from './api';
import dayjs from 'dayjs';

function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getTopNews().then((article) => setArticles(article));
	}, []);

	// function
	// capitalize author
	const toUpperCase = (author) => {
		return author.toUpperCase();
	};

	return (
		<div className='[&>*]:select-none max-w-[360px] py-8 px-4 flex flex-col gap-y-8 bg-white m-auto'>
			{/* header */}
			<div className='flex flex-col gap-y-3'>
				{/* hashtag */}
				<div className='flex gap-1'>
					<div className='p-1 rounded bg-violet-100 border border-violet-300 text-violet-800 text-xs'>
						#TechNews
					</div>
					<div className='p-1 rounded bg-violet-100 border border-violet-300 text-violet-800 text-xs'>
						#HackerNews
					</div>
				</div>

				{/* heading */}
				<h1 className='text-2xl text-slate-900 font-bold'>
					Top 10 <span className='text-violet-800'>Hacker News</span>
				</h1>

				{/* caption */}
				<p className='text-sm text-slate-700'>
					AI breakthroughs, web bloat critiques, privacy debates, open-source
					gems, remote work burnout, and crypto futures. Tech’s hottest
					discussions in one click!
				</p>
			</div>

			{/* content body */}
			<div className='flex flex-col gap-y-4'>
				{/* cards */}
				{articles.map((article) => (
					<div className='flex flex-col p-4 bg-slate-100 gap-y-2 rounded-lg border border-transparent group hover:border hover:border-violet-300 hover:bg-violet-100 duration-150 ease-in-out transition-colors'>
						{/* header */}
						<div className='flex justify-between items-center'>
							{/* left */}
							<div className='flex items-center'>
								<h3 className='text-violet-700 text-sm tracking-tight font-bold'>
									{toUpperCase(article.by)}
								</h3>
								<BsDot className='text-slate-400' />
								<p className='text-slate-600 text-sm'>
									{dayjs.unix(article.time).format('MMMM D,YYYY')}
								</p>
							</div>

							{/* right */}
							<div className='hover:bg-amber-600 cursor-pointer flex w-fit gap-x-1 items-center p-1 rounded bg-violet-100 border border-violet-300 text-violet-800 text-xs group-hover:bg-violet-600 group-hover:text-white'>
								<BiUpvote />
								{`${article.score}+`}
							</div>
						</div>
						{/* body */}
						<div className='flex justify-between gap-x-2'>
							{/* title */}
							<h2 className='text-slate-900 font-bold group-hover:underline'>
								{article.title}
							</h2>

							{/* icon arrow */}
							<div className='flex p-[2px] '>
								<FiArrowUpRight className='text-xl text-slate-500 group-hover:text-violet-800' />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
