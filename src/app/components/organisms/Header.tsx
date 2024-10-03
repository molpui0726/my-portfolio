import React from 'react';
import NavButton from '@/components/atoms/button/NavButton';

const Header = () => {
	return (
		<div className='bg-black p-4 h-16'>
			<nav className='flex justify-end gap-5'>
				<NavButton href='/'>Home</NavButton>
				<NavButton href='/about'>About</NavButton>
				<NavButton href='/contact'>Contact</NavButton>
			</nav>
		</div>
	);
};

export default Header;
