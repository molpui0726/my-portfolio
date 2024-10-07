import type React from 'react';
import { MediaObject } from '../components/organisms/MediaObject';

const Products: React.FC = () => {
	return (
		<div className='bg-white flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<MediaObject
				src='/images/robot_and_hogeta.jpeg'
				alt='走行体とホゲータ'
				heading='Products'
				text='成果物について紹介するページです。Webアプリケーション開発のアルバイトや、産学連携の研究など、
                一部詳細を非公開としているものもあります。組み込み開発からサーバー構築やAWS, Google Cloud など、色々やってます。'
			/>
		</div>
	);
};

export default Products;
