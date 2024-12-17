import type { Metadata } from 'next';
import type React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/components/organisms/Header';

type LayoutProps = {
	children?: React.ReactNode;
};

export const metadata: Metadata = {
	title: '木村優哉のポートフォリオサイト',
	description:
		'木村優哉 (Yuya Kimura) のポートフォリオサイト。宮崎大学大学院に所属している、様々なことに挑戦するWebフロントエンジニア志望の学生です。',
	openGraph: {
		title: '木村優哉のポートフォリオサイト',
		description:
			'木村優哉 (Yuya Kimura) のポートフォリオサイト。宮崎大学大学院に所属している、様々なことに挑戦するWebフロントエンジニア志望の学生です。',
	},
	twitter: {
		title: '木村優哉のポートフォリオサイト',
		description:
			'木村優哉 (Yuya Kimura) のポートフォリオサイト。宮崎大学大学院に所属している、様々なことに挑戦するWebフロントエンジニア志望の学生です。',
		card: 'summary_large_image',
	},
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
