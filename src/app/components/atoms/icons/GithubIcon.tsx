import Link from 'next/link';
import type React from 'react';
import GithubLogo from '/public/images/icons/Github-logo.svg';

export const GithubIcon: React.FC = () => {
	return (
		<Link href='https://github.com/YKhm20020'>
			<div className='rounded-md w-20 h-20 hover:bg-lime-500'>
				<GithubLogo width={200} height={200} />
			</div>
		</Link>
	);
};
