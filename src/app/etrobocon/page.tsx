import type React from 'react';
import { PDFViewer } from '../components/atoms/PDFViewer';
import { MediaObject } from '../components/organisms/MediaObject';

const ETRobocon: React.FC = () => {
	return (
		<div className='bg-white flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='flex flex-col items-center py-4'>
				<h1 className='text-4xl font-bold text-center'>ETロボコン</h1>
				<p className='text-lg pt-4'>
					学生時代に最も力を入れて取り組んだ、ETロボコンについてのページ
				</p>
			</div>
			<MediaObject
				src='/images/etrobocon/etrobocon2024.png'
				alt='ETロボコン'
				heading='ETロボコンとは'
				text='ETロボコンは、高専や大学生などの学生から、企業までが参加する組み込み系の大会です。
                リアルコース上を機械に走らせて点数を競う走行部門と、設計書の出来を評価するモデル部門でチームの得点を決定します。
                2023年は九州地区大会で総合優勝、全国大会で総合6位の成績を収めました。
                2024年はチームリーダーを務め、九州地区大会で総合準優勝、モデル優勝の成績を収めました。'
			/>
			<MediaObject
				src='/images/etrobocon/driving.png'
				alt='走行部門'
				heading='走行部門'
				text='走行部門では、走行体にリアルな布製のコースを走らせた結果が評価されます。
                指定箇所の走行までが速いほど得点が高いエリアと、攻略することでボーナスの得点が入る難所のエリアがあります。
                '
			/>
			<MediaObject
				src='/images/etrobocon/model/2_analysis.jpg'
				alt='モデル部門'
				heading='モデル部門'
				text='モデル部門では、設計書の出来が評価されます。
                開発の目標と、それに必要な機能や品質、制約をまとめた要求モデル、要求や制約からシステム全体の構造をまとめた分析モデル、
                要求を実現する各システムの構造と振る舞いをまとめた設計モデル、要求で定義した品質を満たす制御戦略とそれに用いる要素技術をまとめた制御モデルで構成します。
                '
			/>
			<div className='flex flex-col items-center'>
				<h1 className='py-4 self-start text-3xl font-bold sm:text-4xl md:text-2xl lg:text-3xl'>
					KatLab 2024年モデル
				</h1>
				<PDFViewer filePath='/ADV_093_KatLab.pdf' />
			</div>
		</div>
	);
};

export default ETRobocon;
