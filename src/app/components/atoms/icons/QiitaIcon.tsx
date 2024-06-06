import Link from 'next/link';
import Image from 'next/image';

export const QiitaIcon: React.FC = () => {
	return (
		<Link href='https://qiita.com/hogeta_KL'>
			<div className='rounded-full w-20 h-20'>
				<Image
					src='/images/icons/qiita-white-icon.png'
					alt='QiitaIcon'
					width={200}
					height={200}
					style={{ borderRadius: '50%' }}
				/>
			</div>
		</Link>
	);
};
