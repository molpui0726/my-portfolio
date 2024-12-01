import type React from 'react';
import { NavButton } from '../atoms/button/NavButton';

const Header: React.FC = () => {
	return (
		<div className='bg-black p-4 h-16'>
			<nav className='flex justify-end gap-5'>
				<NavButton href='/'>Home</NavButton>
				<NavButton href='/about'>About</NavButton>
				<NavButton href='/etrobocon'>ETRobocon</NavButton>
				<NavButton href='/products'>Products</NavButton>
			</nav>
		</div>
	);
};

export default Header;
