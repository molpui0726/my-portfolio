import { MediaObject } from '@/app/components/organisms/MediaObject';
import Link from 'next/link';
import type React from 'react';
import { ProgressBar } from '../components/atoms/ProgressBar';
import { SocialMediaLinkList } from '../components/molecules/List/SocialMediaLinkList';

const About: React.FC = () => {
	return (
		<>
			<ProgressBar />
			<div className='flex flex-col items-center py-4'>
				<h1 className='text-4xl font-bold text-center'>About</h1>
				<p className='text-lg pt-4'>私を紹介するページ</p>
			</div>
			<MediaObject
				src='/images/robot_and_hogeta.jpeg'
				alt='走行体とホゲータ'
				heading='About Me'
				texts={[
					'宮崎大学の大学院に在籍している木村優哉(きむら ゆうや)です。',
					'プログラミングを専攻する学科に所属しており、研究やETロボコン、Webアプリケーション開発のアルバイトなどを行っております。',
					'「学生時代だからできる」を重要視し、様々なことに挑戦する意識を一番にもって活動を続けています。',
				]}
			/>

			<h1 className='my-4 self-start text-3xl font-bold sm:text-4xl md:text-2xl lg:text-3xl'>
				開発経験
			</h1>
			<p>
				挑戦する環境に身を置き続けたかったため、能動的に動くことができ、かつ時間がある学生時代は、様々なことに挑戦を続けました。
			</p>
			<div className='grid grid-cols-3 gap-2 my-8 mx-16'>
				<p className='col-span-1'>開発経験</p>
				<p className='col-span-2'>ETロボコン、Webアプリ開発アルバイト、ハッカソンなど</p>
				<p className='col-span-1'>使用経験技術</p>
				<p className='col-span-2'>C++, Python, Next.js, React, AWS, Google Cloud など</p>
				<p className='col-span-1'>開発時気をつけていること</p>
				<p className='col-span-2'>ドキュメントを書くこと、ユーザー体験を常に考慮すること</p>
			</div>
			<p>
				詳細は{' '}
				<Link href='/products' className='underline'>
					Products
				</Link>{' '}
				ページをご覧ください。
			</p>
			<h1 className='mt-8 mb-4 self-start text-3xl font-bold sm:text-4xl md:text-2xl lg:text-3xl'>
				ソーシャルメディア
			</h1>
			<p>
				私が運用している Github, X (旧 Twitter),
				Qiitaのリンクは以下からどうぞ。ボタンのアニメーションは結構頑張りました。
			</p>
			<SocialMediaLinkList />
		</>
	);
};

export default About;
