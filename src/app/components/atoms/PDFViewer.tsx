'use client';

import { useState, useEffect } from 'react';
import type React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString();

type PDFViewerProps = {
	filePath: string; // 表示するPDFのファイルパス
};

export const PDFViewer: React.FC<PDFViewerProps> = ({ filePath }: PDFViewerProps) => {
	const [numPages, setNumPages] = useState(1);
	const [pageWidth, setPageWidth] = useState(500); // PDFページの初期幅
	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	useEffect(() => {
		// PDFページの大きさを更新する関数
		const updatePageWidth = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth < 640) {
				setPageWidth(screenWidth * 0.9); // スマホサイズ
			} else if (screenWidth < 1024) {
				setPageWidth(700); // タブレットサイズ
			} else {
				setPageWidth(1000); // デスクトップサイズ
			}
		};

		// 初回設定とリサイズイベントリスナー
		updatePageWidth();
		window.addEventListener('resize', updatePageWidth);
		return () => window.removeEventListener('resize', updatePageWidth);
	}, []);

	return (
		<>
			<div className='flex justify-center'>
				<Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
					<div className='flex flex-col items-center gap-8'>
						{Array.from({ length: numPages }, (_, index) => (
							<Page
								key={`page_${index + 1}`}
								pageNumber={index + 1}
								renderAnnotationLayer={false}
								renderTextLayer={false}
								width={pageWidth}
								className='mb-4 shadow-lg'
							/>
						))}
					</div>
				</Document>
			</div>
		</>
	);
};
