import type React from 'react';

type PDFViewerProps = {
	filePath: string; // 表示するPDFのファイルパス
};

export const PDFViewer: React.FC<PDFViewerProps> = ({ filePath }: PDFViewerProps) => {
	return (
		<div className='flex justify-center w-full'>
			<object
				data={filePath}
				type='application/pdf'
				className='w-full max-w-4xl h-[80vh] shadow-lg'
			>
				<p className='p-4 text-center'>
					お使いのブラウザは PDF のプレビュー表示に対応していません。
					<a
						href={filePath}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 underline'
					>
						こちらから PDF を開いてください
					</a>
				</p>
			</object>
		</div>
	);
};
