import type React from 'react';
import {
	GithubLinkButton,
	QiitaLinkButton,
	XLinkButton,
} from '../../atoms/button/SocialMediaLinkButton';

export const SocialMediaLinkList: React.FC = () => {
	return (
		<div className='flex flex-col sm:flex-row sm:justify-center gap-2 my-6'>
			<GithubLinkButton />
			<XLinkButton />
			<QiitaLinkButton />
		</div>
	);
};
