import type React from 'react';
import { HomeButton } from '../atoms/button/HomeButton';
import { NavButton } from '../atoms/button/NavButton';

const Header: React.FC = () => {
	return (
		<div className='bg-black p-4 px-6 sm:px-10 h-16 flex items-center justify-between'>
			{/* 左端に配置するホームボタン */}
			<HomeButton />

			{/* 右端に配置する NavButton のグループ*/}
			<div className='flex gap-2 sm:gap-6'>
				<NavButton href='/about'>About</NavButton>
				<NavButton href='/etrobocon'>ETRobocon</NavButton>
				<NavButton href='/products'>Products</NavButton>
			</div>
		</div>
	);
};

export default Header;
