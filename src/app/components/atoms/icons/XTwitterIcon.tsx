import Link from 'next/link';
import Image from 'next/image';

export const XTwitterIcon: React.FC = () => {
	return (
		<Link href='https://x.com/Hogeta_KL'>
			<div className='w-20 h-20'>
				<Image
					src='/images/icons/XTwitter-logo-black.png'
					alt='XTwitterIcon'
					width={200}
					height={200}
				/>
			</div>
		</Link>
	);
};
