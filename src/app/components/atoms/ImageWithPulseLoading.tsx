'use client';

import Image from 'next/image';
import { useState } from 'react';
import type React from 'react';

interface ImageWithPulseLoadingProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
}

export const ImageWithPulseLoading: React.FC<ImageWithPulseLoadingProps> = ({
	src,
	alt,
	width,
	height,
	className = '',
}) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className='relative'>
			{isLoading && (
				<div
					className={`absolute inset-0 bg-gray-200 animate-pulse rounded-lg ${className}`}
					style={{ width: `${width}px`, height: `${height}px` }}
				/>
			)}
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
				onLoadingComplete={() => setIsLoading(false)}
			/>
		</div>
	);
};
