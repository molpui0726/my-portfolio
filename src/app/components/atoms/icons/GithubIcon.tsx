import Link from 'next/link';
import type React from 'react';
import GithubLogo from '/public/images/icons/Github-logo.svg';

type GithubIconProps = {
	href: string;
};

export const GithubIcon: React.FC<GithubIconProps> = ({ href }: GithubIconProps) => {
	return (
		<Link href={href}>
			<div className='rounded-md hover:bg-lime-500'>
				<GithubLogo width={100} height={100} />
			</div>
		</Link>
	);
};
