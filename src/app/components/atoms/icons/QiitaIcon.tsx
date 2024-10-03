import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

export const QiitaIcon: React.FC = () => {
	return (
		<Link href='https://qiita.com/hogeta_KL'>
			<div className='rounded-full w-20 h-20'>
				<Image
					src='/images/icons/qiita-icon.png'
					alt='QiitaIcon'
					width={200}
					height={200}
					style={{ borderRadius: '50%' }}
				/>
			</div>
		</Link>
	);
};
