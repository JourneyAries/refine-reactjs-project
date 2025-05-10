import React from 'react';
import Hashtag from './Hashtag';

const Header = () => {
	return (
		<div className='flex flex-col gap-y-3'>
			<Hashtag />
			<h1 className='text-2xl font-bold text-slate-900'>
				Top 10 <span className='text-violet-700'>Hacker News</span>
			</h1>
			<p className='text-sm text-slate-700'>
				AI breakthroughs, web bloat critiques, privacy debates, open-source
				gems, remote work burnout, and crypto futures. Tech’s hottest
				discussions in one click!
			</p>
		</div>
	);
};

export default Header;
