import type React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/components/organisms/Header';

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
	return (
		<html lang='ja'>
			<body>
				<main>
					<Header />
					<div className='bg-white flex-grow container mx-auto px-10 sm:px-18 md:px-24 lg:px-30 py-12'>
						{children}
					</div>
				</main>
			</body>
		</html>
	);
};

export default Layout;
