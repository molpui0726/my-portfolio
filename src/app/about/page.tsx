import { WorkCard } from '@/app/components/molecules/card/WorkCard';
import { MediaObject } from '@/app/components/organisms/MediaObject';
import Link from 'next/link';
import type React from 'react';

const About: React.FC = () => {
	return (
		<>
			<MediaObject
				src='/images/robot_and_hogeta.jpeg'
				alt='走行体とホゲータ'
				heading='About Me'
				texts={[
					'宮崎大学の大学院に在籍している木村優哉(きむら ゆうや)です。',
					'プログラミングを専攻する学科に所属しており、研究やETロボコン、Webアプリケーション開発のアルバイトなどを行っております。',
					'学生時代だからできる、ということを重視して活動を続けてきました。',
				]}
			/>
			<MediaObject
				src='/images/robot_and_hogeta.jpeg'
				alt='走行体とホゲータ'
				heading='About Me'
				texts={[
					'宮崎大学の大学院に在籍している木村優哉(きむら ゆうや)です。',
					'プログラミングを専攻する学科に所属しており、研究やETロボコン、Webアプリケーション開発のアルバイトなどを行っております。',
					'学生時代だからできる、ということを重視して活動を続けてきました。',
				]}
			/>
		</>
	);
};

export default About;
