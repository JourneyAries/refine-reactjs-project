export const frontendFAQ = [
	{
		title: 'Apa perbedaan React, Vue, dan Angular?',
		content:
			'React adalah library JavaScript untuk membangun UI, Vue framework progresif, dan Angular framework lengkap dengan two-way data binding.',
		children: [
			{
				title: 'Mana yang lebih mudah dipelajari?',
				content:
					'Vue dianggap paling mudah untuk pemula karena sintaksnya sederhana, diikuti React lalu Angular.',
			},
			{
				title: 'Bisakah menggunakan TypeScript di ketiganya?',
				content:
					'Ya! React, Vue, dan Angular semuanya mendukung TypeScript dengan baik.',
			},
		],
	},
	{
		title: 'Apa itu Virtual DOM?',
		content:
			'Virtual DOM adalah representasi JavaScript dari DOM aktual yang digunakan React/Vue untuk optimisasi rendering.',
		children: [
			{
				title: 'Bagaimana cara kerjanya?',
				content:
					'Ketika state berubah, dibuat VDOM baru, lalu dibandingkan dengan VDOM sebelumnya (diffing), dan hanya bagian yang berubah saja yang di-update di DOM nyata.',
			},
		],
	},
	{
		title: 'Apa keuntungan CSS-in-JS?',
		content:
			'Scoping styles otomatis, dynamic styling berdasarkan props/state, dan eliminasi class name collisions.',
		children: [
			{
				title: 'Apa contoh library CSS-in-JS?',
				content: 'Styled-components, Emotion, dan JSS adalah yang populer.',
			},
			{
				title: 'Apakah berpengaruh pada performance?',
				content:
					'Ada overhead kecil karena styles di-generate runtime, tapi biasanya tidak signifikan.',
				children: [
					{
						title: 'Bagaimana mengoptimalkannya?',
						content:
							'Gunakan SSR, extract critical CSS, atau hindari dynamic styles berlebihan.',
					},
				],
			},
		],
	},
	{
		title: 'Apa itu Web Components?',
		content:
			'Standar web untuk membuat reusable custom elements dengan encapsulation menggunakan Shadow DOM.',
	},
];
