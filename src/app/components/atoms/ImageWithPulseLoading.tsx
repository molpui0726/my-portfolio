'use client';

import Image from 'next/image';
import { useState } from 'react';
import type React from 'react';

interface ImageWithPulseLoadingProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	sizes?: string;
	style?: React.CSSProperties | undefined;
	className?: string;
}

export const ImageWithPulseLoading: React.FC<ImageWithPulseLoadingProps> = ({
	src,
	alt,
	sizes,
	width,
	height,
	style,
}) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			sizes={sizes}
			style={style}
			className={`rounded-lg ${isLoading ? 'bg-gray-200 animate-pulse object-cover object-center' : ''}`}
			onLoadingComplete={() => setIsLoading(false)}
		/>
	);
};
