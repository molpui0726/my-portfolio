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
}) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={`transition-opacity duration-300 rounded-lg ${
				isLoading ? 'opacity-0 bg-gray-200 animate-pulse' : 'opacity-100'
			}`}
			onLoadingComplete={() => setIsLoading(false)}
		/>
	);
};
