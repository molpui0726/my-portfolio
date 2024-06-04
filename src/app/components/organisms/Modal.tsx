import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';

type ModalProps = {
    isOpen: boolean;
    title: string;
    src: string;
    alt: string;
    text: string;
    onCancel: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, title, src, alt, text, onCancel }) => {
    const [isWindowTooSmall, setIsWindowTooSmall] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWindowTooSmall(window.innerWidth < 650 || window.innerHeight < 500);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // レンダリング後のウインドウサイズを確認し、リサイズ

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isOpen || isWindowTooSmall) {
        return null;
    }

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white rounded-md p-5 flex flex-col items-center justify-center">
                    <div className="relative flex justify-between mb-2 w-full">
                        <button
                            type="button"
                            className="bg-white absolute top-0 right-0 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={onCancel}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 md:tracking-wide">{title}</h1>
                    <div className="grid-cols-2 flex flex-col md:flex-row md:gap-4 h-full w-full">
                        <div className="sm:w-full md:w-1/2 md:mx-3 overflow-hidden bg-gray mb-4 md:mb-0 flex items-center justify-center">
                            <Image
                                className="rounded-lg object-cover object-center"
                                src={src}
                                width={600}
                                height={1000}
                                alt={alt}
                            />
                        </div>
                        <div className="md:w-1/2 flex items-center">
                            <p className="sm:text-center md:ml-8 text-left animate-fade-right animate-duration-[1600ms]">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};