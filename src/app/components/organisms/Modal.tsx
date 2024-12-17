'use client';

import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useCallback, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

type ModalProps = {
	isOpen: boolean; // モーダルを開くかどうかを監視する状態変数 true: 開く
	src: string; // 左に配置する画像の画像パス
	alt: string; // 画像が表示されないときに変わりに表示するテキスト
	modalTitle: string; // 右上部に配置する題
	modalTexts: string[]; // 題の下に配置するテキスト。改行ごとに要素を分割する
	githubUrl?: string; // 成果物から飛べる Github の URL リンク
	onClose: () => void; // モーダルを閉じる関数
};

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	src,
	alt,
	modalTitle,
	modalTexts,
	githubUrl,
	onClose,
}: ModalProps) => {
	// キー入力時の処理
	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'Escape') {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		// Escapeキー入力時の処理
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		// モーダルオープン時の判定処理
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleEscapeKey);
		} else {
			document.body.style.overflow = 'auto';
			window.removeEventListener('keydown', handleEscapeKey);
		}

		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
		};
	}, [isOpen, onClose]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-16 py-12'>
			<div
				className='fixed inset-0 bg-black bg-opacity-50'
				onClick={onClose}
				onKeyDown={handleKeyDown}
			/>
			<div className='bg-white rounded-md p-5 flex flex-col items-center justify-center z-10 max-w-screen-lg max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-10rem)]'>
				<div className='relative mb-2 w-full'>
					<button
						type='button'
						className='text-gray-400 absolute top-0 right-0 rounded-md p-2 inline-flex items-center justify-center
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
						onClick={onClose}
					>
						<span className='sr-only'>Close menu</span>
						<svg
							className='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<h1 className='text-4xl font-bold mb-8 md:tracking-wide animate-fade-right animate-duration-[1600ms]'>
					{modalTitle}
				</h1>
				<div className='flex flex-col md:flex-row md:gap-4'>
					<div className='sm:w-full md:w-1/2 md:mx-3 overflow-hidden bg-gray mb-8 md:mb-2 flex items-center justify-center'>
						<Image
							className='rounded-lg max-h-40 sm:max-h-48 md:max-h-96 object-scale-down'
							src={src}
							width={400}
							height={400}
							alt={alt}
						/>
					</div>
					<div className='md:w-1/2 md:ml-4 items-start'>
						{modalTexts.map((modalText) => (
							<p key={modalText} className='mb-4 last:mb-0 text-left'>
								{modalText}
							</p>
						))}
						{githubUrl && (
							<div className='flex justify-end mt-auto'>
								<Link
									href={githubUrl}
									className='bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-200'
								>
									<FaGithub className='mr-2' size={23} />
									GitHub
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
