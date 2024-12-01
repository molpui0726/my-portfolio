import { MediaObject } from '@/app/components/organisms/MediaObject';
import Link from 'next/link';
import type React from 'react';
import { ProgressBar } from '../components/atoms/ProgressBar';
import { SocialMediaLinkList } from '../components/molecules/list/SocialMediaLinkList';

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

			<div className='flex flex-col gap-16'>
				<div className='container'>
					<h1 className='mt-6 mb-4 self-start text-3xl font-bold sm:text-4xl md:text-2xl lg:text-3xl'>
						プロフィール
					</h1>
					<div className='grid grid-cols-3 gap-2 mt-8 mx-16'>
						<p className='col-span-1'>所属</p>
						<p className='col-span-2'>
							<Link
								href='https://www.miyazaki-u.ac.jp/tech/master/introduction/gaiyou.html#ict'
								className='underline cursor-pointer'
							>
								宮崎大学大学院 工学研究科 先端情報コース
							</Link>
							、
							<Link
								href='https://earth.cs.miyazaki-u.ac.jp/'
								className='underline cursor-pointer'
							>
								片山徹郎研究室
							</Link>
						</p>
						<p className='col-span-1'>学年</p>
						<p className='col-span-2'>修士1年 (2024年現在)</p>
						<p className='col-span-1'>最終学歴</p>
						<p className='col-span-2'>大学院 (2026年4月卒業見込み、26卒)</p>
					</div>
				</div>

				<div className='container'>
					<h1 className='mb-4 self-start text-3xl font-bold sm:text-4xl md:text-2xl lg:text-3xl'>
						開発経験
					</h1>
					<p>
						挑戦する環境に身を置き続けたかったため、能動的に動くことができ、かつ時間がある学生時代は、様々なことに挑戦を続けました。
					</p>
					<div className='grid grid-cols-3 gap-2 my-8 mx-16'>
						<p className='col-span-1'>開発経験</p>
						<p className='col-span-2'>
							ETロボコン、Webアプリ開発アルバイト、ハッカソンなど
						</p>
						<p className='col-span-1'>使用経験技術</p>
						<p className='col-span-2'>
							C++, Python, Next.js, React, AWS, Google Cloud など
						</p>
						<p className='col-span-1'>開発時気をつけていること</p>
						<p className='col-span-2'>
							ドキュメントを書くこと、ユーザー体験を常に考慮すること
						</p>
					</div>
					<p>
						詳細は{' '}
						<Link href='/products' className='underline cursor-pointer'>
							Products
						</Link>{' '}
						ページをご覧ください。
					</p>
				</div>

				<div className='container'>
					<h1 className='mb-4 self-start text-3xl font-bold sm:text-4xl md:text-2xl lg:text-3xl'>
						ソーシャルメディア
					</h1>
					<p>
						私が運用している Github, X (旧 Twitter),
						Qiitaのリンクは以下からどうぞ。ボタンのアニメーションは結構頑張りました。
					</p>
				</div>
			</div>
			<SocialMediaLinkList />
		</>
	);
};

export default About;
