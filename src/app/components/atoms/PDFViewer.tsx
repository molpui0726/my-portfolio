'use client';

import { useState } from 'react';
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
	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	return (
		<Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
			{Array.from({ length: numPages }, (_, index) => (
				<Page
					key={`page_${index + 1}`}
					pageNumber={index + 1}
					renderAnnotationLayer={false}
					renderTextLayer={false}
					width={500}
				/>
			))}
		</Document>
	);
};
