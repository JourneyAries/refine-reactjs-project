import React from 'react';

const Profile = ({ name }) => {
	const getRandomColor = () => {
		const h = Math.floor(Math.random() * 360);
		const s = 70 + Math.floor(Math.random() * 30);
		const l = 30 + Math.floor(Math.random() * 30);
		return `hsl(${h}, ${s}%, ${l}%)`;
	};

	const getInitials = (name) => {
		if (!name) return '';

		const words = name.trim().split(/\s+/);

		if (words.length === 1) {
			return words[0].charAt(0).toUpperCase();
		} else {
			const first = words[0].charAt(0);
			const second = words[1].charAt(0);
			return `${first}${second}`.toUpperCase();
		}
	};

	return (
		<div
			style={{ backgroundColor: getRandomColor() }}
			className='w-7 h-7 text-xs font-bold leading-4 flex items-center justify-center rounded-full text-white'>
			<p>{getInitials(name)}</p>
		</div>
	);
};

export default Profile;
