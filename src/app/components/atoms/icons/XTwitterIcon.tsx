import type React from 'react';
import Link from 'next/link';
import XTwitterSVG from '/public/images/icons/XTwitter-logo.svg';

export const XTwitterIcon: React.FC = () => {
	return (
		<Link href='https://x.com/Hogeta_KL'>
			<div className='w-20 h-20'>
				{/* <Image src='/images/icons/logo.png' alt='XTwitterIcon' width={200} height={200} /> */}
				<XTwitterSVG width={200} height={200} />
			</div>
		</Link>
	);
};
