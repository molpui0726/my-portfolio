import Link from 'next/link';
import type React from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { SiQiita } from 'react-icons/si';

export const XLinkButton: React.FC = () => {
	return (
		<Link
			href='https://x.com/molpui0726'
			className='group bg-neutral-950 py-2 px-4 gap-2 mx-auto inline-flex items-center justify-center rounded-md'
		>
			{/* アイコン */}
			<FaXTwitter size={24} className='text-white' />
			{/* テキストのラッパー */}
			<div className='relative overflow-hidden px-3 flex items-center justify-center'>
				{/* 初期表示のテキスト */}
				<p className='transition-transform duration-300 text-white font-bold group-hover:-translate-y-full whitespace-nowrap'>
					X (Twitter)
				</p>
				{/* ホバー時に表示するテキスト */}
				<p className='absolute transition-transform duration-300 translate-y-full text-white group-hover:translate-y-0 whitespace-nowrap'>
					@molpui0726
				</p>
			</div>
		</Link>
	);
};

export const GithubLinkButton: React.FC = () => {
	return (
		<Link
			href='https://github.com/molpui0726'
			className='group bg-neutral-950 py-2 px-4 gap-2 mx-auto inline-flex items-center justify-center rounded-md'
		>
			{/* アイコン */}
			<FaGithub size={24} className='text-white' />
			{/* テキストのラッパー */}
			<div className='relative overflow-hidden px-7 flex items-center justify-center'>
				{/* 初期表示のテキスト */}
				<p className='transition-transform duration-300 text-white font-bold group-hover:-translate-y-full whitespace-nowrap'>
					Github
				</p>
				{/* ホバー時に表示するテキスト */}
				<p className='absolute transition-transform duration-300 translate-y-full text-white group-hover:translate-y-0 whitespace-nowrap'>
					molpui0726
				</p>
			</div>
		</Link>
	);
};

export const QiitaLinkButton: React.FC = () => {
	return (
		<Link
			href='https://qiita.com/molpui0726'
			className='group bg-neutral-950 py-2 px-4 gap-2 mx-auto inline-flex items-center justify-center rounded-md'
		>
			{/* アイコン */}
			<SiQiita size={24} className='text-white' />
			{/* テキストのラッパー */}
			<div className='relative overflow-hidden px-9 flex items-center justify-center'>
				{/* 初期表示のテキスト */}
				<p className='transition-transform duration-300 text-white font-bold group-hover:-translate-y-full whitespace-nowrap'>
					Qiita
				</p>
				{/* ホバー時に表示するテキスト */}
				<p className='absolute transition-transform duration-300 translate-y-full text-white group-hover:translate-y-0 whitespace-nowrap'>
					@molpui0726
				</p>
			</div>
		</Link>
	);
};
