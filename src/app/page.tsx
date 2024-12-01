import type React from 'react';
import { SectionCard } from './components/molecules/card/SectionCard';
import { SocialMediaLinkList } from './components/molecules/list/SocialMediaLinkList';

const sectionCards = [
	{
		id: 1,
		title: 'About Me',
		description: '自分や所属している大学・組織についてのページ',
		linkHref: '/about',
	},
	{
		id: 2,
		title: 'ETRobocon',
		description: '最も力を入れて活動したETロボコンについてのページ',
		linkHref: '/etrobocon',
	},
	{
		id: 3,
		title: 'My Products',
		description: '今まで作成してきた成果物についてのページ',
		linkHref: '/products',
	},
];

const Home: React.FC = () => {
	return (
		<div className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='text-center py-8'>
				<h1 className='text-5xl font-bold mb-4 opacity-0 translate-y-5 animate-fadeIn'>
					Welcome to My Portfolio
				</h1>
				<p className='text-xl text-gray-600'>
					I&apos;m a master&apos;s student in Miyazaki University, aspiring front-end web
					developer
				</p>
				<div
					className={`mt-12 grid gap-8 ${sectionCards.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'} lg:grid-cols-${Math.min(sectionCards.length, 3)} mb-12`}
				>
					{sectionCards.map((card) => (
						<SectionCard
							key={card.id}
							title={card.title}
							description={card.description}
							linkHref={card.linkHref}
						/>
					))}
				</div>
				<SocialMediaLinkList />
			</div>
		</div>
	);
};

export default Home;
