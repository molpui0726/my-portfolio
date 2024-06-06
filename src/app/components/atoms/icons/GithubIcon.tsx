import Link from 'next/link';
import Image from 'next/image';

export const GithubIcon: React.FC = () => {
	return (
		<Link href='https://github.com/YKhm20020'>
			<div className='rounded-full w-20 h-20'>
				<Image
					src='/images/icons/github-mark.png'
					alt='GithubIcon'
					width={200}
					height={200}
					style={{ borderRadius: '50%' }}
				/>
			</div>
		</Link>
	);
};
