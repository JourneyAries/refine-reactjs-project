export const reactFAQ = [
	{
		question: 'Apa itu React?',
		answer:
			'React adalah library JavaScript untuk membangun antarmuka pengguna (UI) yang interaktif dan dapat digunakan kembali.',
		subQuestions: [
			{
				question: 'Siapa yang mengembangkan React?',
				answer:
					'React dikembangkan dan dikelola oleh Facebook (sekarang Meta).',
			},
			{
				question: 'Apa keunggulan React?',
				answer:
					'Komponen yang dapat digunakan kembali, virtual DOM untuk performa tinggi, dan ekosistem yang luas.',
			},
		],
	},
	{
		question: 'Apa itu komponen dalam React?',
		answer:
			'Komponen adalah blok bangunan independen yang mengembalikan elemen UI.',
		subQuestions: [
			{
				question: 'Apa perbedaan komponen kelas dan fungsi?',
				answer:
					'Komponen kelas menggunakan class dan lifecycle methods, sedangkan komponen fungsi menggunakan hooks.',
			},
			{
				question: 'Bagaimana cara membuat komponen?',
				answer:
					'Bisa dengan function atau class:\n\n```jsx\nfunction Hello() {\n  return <h1>Hello</h1>;\n}\n```',
			},
		],
	},
	{
		question: 'Apa itu state dan props?',
		answer:
			'State adalah data internal komponen, sedangkan props adalah data yang diterima dari komponen induk.',
		subQuestions: [
			{
				question: 'Kapan menggunakan state vs props?',
				answer:
					'Gunakan state untuk data yang bisa berubah dalam komponen, props untuk komunikasi antar komponen.',
			},
			{
				question: 'Apakah props bisa diubah?',
				answer:
					'Props bersifat read-only dan tidak boleh diubah langsung oleh komponen anak.',
			},
		],
	},
	{
		question: 'Apa itu hooks?',
		answer:
			'Fitur yang memungkinkan penggunaan state dan lifecycle di komponen fungsi.',
		subQuestions: [
			{
				question: 'Apa saja hooks yang umum digunakan?',
				answer:
					'useState, useEffect, useContext, useReducer, useCallback, dan useMemo.',
			},
			{
				question: 'Kapan hooks diperkenalkan?',
				answer: 'Hooks diperkenalkan di React 16.8 (Februari 2019).',
			},
		],
	},
	{
		question: 'Bagaimana cara install React?',
		answer:
			'Gunakan Create React App atau Vite:\n\n```bash\nnpx create-react-app nama-aplikasi\n```',
		subQuestions: [
			{
				question: 'Apa alternatif Create React App?',
				answer: 'Vite, Next.js, Remix, atau konfigurasi manual dengan Webpack.',
			},
			{
				question: 'Bagaimana cara menjalankan aplikasi React?',
				answer: 'Setelah install, jalankan:\n\n```bash\nnpm start\n```',
			},
		],
	},
];
