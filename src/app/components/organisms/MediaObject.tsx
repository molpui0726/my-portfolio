import Image from 'next/image';
import type React from 'react';

type MediaObjectProps = {
	src: string; // 左に配置する画像の画像パス
	alt: string; // 画像が表示されないときに変わりに表示する文字列
	heading: string; // 右上方に配置する題
	texts: string[]; // 題の下に配置する文字列。改行ごとに要素を分割する
};

export const MediaObject: React.FC<MediaObjectProps> = ({
	src,
	alt,
	heading,
	texts,
}: MediaObjectProps) => {
	return (
		<div className='bg-white py-6 sm:py-8 lg:py-12'>
			<div className='mx-auto'>
				<div className='grid gap-8 md:grid-cols-2 lg:gap-12 items-start'>
					<div className='h-128 overflow-hidden bg-gray'>
						<Image
							className='rounded-lg object-cover object-center'
							src={src}
							width={600}
							height={1000}
							alt={alt}
						/>
					</div>
					<div className='flex flex-col'>
						<h1 className='pt-2 pb-4 md:py-2 text-center sm:text-4xl md:text-2xl lg:text-3xl text-3xl font-bold animate-fade-right animate-duration-[1600ms]'>
							{heading}
						</h1>
						{texts.map((text) => (
							<p key={text} className='text-left mb-2 last:mb-0'>
								{text}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
