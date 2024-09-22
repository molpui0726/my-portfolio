import type React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/components/organisms/Header';

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html lang='ja'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default Layout;
