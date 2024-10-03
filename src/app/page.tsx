import Link from 'next/link';
import type React from 'react';

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
