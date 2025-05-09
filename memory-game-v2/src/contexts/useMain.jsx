import React from 'react';
import { useState, useContext, createContext, useMemo } from 'react';
import { numbers } from '../data/data';
import Interactive from '../components/Interactive';
import { useTimer } from 'use-timer';
import _ from 'lodash';

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
	const [hits, setHits] = useState(0);
	const [match, setMatch] = useState(0);
	const [flippedCards, setFlippedCards] = useState([]);
	const [matchedCards, setMatchedCards] = useState([]);
	const [shuffleNumbers] = useState(() => _.shuffle([...numbers]));

	const { time, start, reset } = useTimer({
		interval: 1000,
		initialTime: 0,
		timerType: 'INCREMENTAL',
	});

	const handleHits = () => {
		setHits((prev) => prev + 1);
	};

	const handleMatch = () => {
		setMatch((prev) => prev + 1);
	};

	const handleReset = () => {
		setFlippedCards([]);
		setMatchedCards([]);
		setHits(0);
		setMatch(0);
		reset();
	};

	const handleClick = (index) => {
		//first rules
		if (
			flippedCards.includes(index) ||
			matchedCards.includes(index) ||
			flippedCards.length >= 2
		) {
			return;
		}
		start();
		handleHits();

		const newFlipped = [...flippedCards, index];
		setFlippedCards(newFlipped);

		//second rules
		if (newFlipped.length === 2) {
			if (shuffleNumbers[newFlipped[0]] === shuffleNumbers[newFlipped[1]]) {
				const newMatchedCards = [...matchedCards, ...newFlipped];
				setMatchedCards(newMatchedCards);
				handleMatch();
				setFlippedCards([]);
			} else {
				setTimeout(() => {
					setFlippedCards([]);
				}, 1000);
			}
		}
	};

	const renderInteractive = () =>
		shuffleNumbers.map((num, index) => {
			return <Interactive key={index} num={num} index={index} />;
		});

	const value = useMemo(
		() => ({
			time,
			hits,
			match,
			flippedCards,
			matchedCards,
			handleHits,
			handleMatch,
			handleReset,
			handleClick,
			renderInteractive,
		}),
		[time, hits, match, flippedCards, matchedCards],
	);

	return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMain = () => {
	const context = useContext(MainContext);
	if (!context) {
		throw new Error('useMain must be used within in MainContextProvider');
	}
	return context;
};
