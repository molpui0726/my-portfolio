import Link from 'next/link';
import type React from 'react';

const Home: React.FC = () => {
	return (
		<div>
			<div className='text-center py-8'>
				<h1 className='text-5xl font-bold mb-4 opacity-0 translate-y-[-20px] animate-fadeIn'>
					Welcome to My Portfolio
				</h1>
				<p className='text-xl text-gray-600'>
					I'm a master's student in Miyazaki University, aspiring front-end web developer
				</p>
			</div>
		</div>
	);
};

export default Home;
