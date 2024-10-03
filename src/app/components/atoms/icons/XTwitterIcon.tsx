import Link from 'next/link';
import type React from 'react';
import XTwitterSVG from '/public/images/icons/XTwitter-logo.svg';

export const XTwitterIcon: React.FC = () => {
	return (
		<Link href='https://x.com/Hogeta_KL'>
			<div className='w-20 h-20'>
				<XTwitterSVG width={200} height={200} />
			</div>
		</Link>
	);
};
