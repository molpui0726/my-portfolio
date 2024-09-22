import type React from 'react';
import layout from '@/app/layout';
import Link from 'next/link';

const Home: React.FC = () => {
	return (
		<div>
			<h1>My Portfolio</h1>
			<nav>
				<Link href='/about'>About</Link>
				<Link href='/contact'>Contact</Link>
			</nav>
		</div>
	);
};

export default Home;
