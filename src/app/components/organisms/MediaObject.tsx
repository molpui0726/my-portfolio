import React from 'react';
import Image from 'next/image';

type MediaObjectProps = {
    src: string;
    alt: string;
    heading: string;
    text: string;
}

const MediaObject: React.FC<MediaObjectProps> = ({src, alt, heading, text}) => {
    return (
        <div className='bg-white py-6 sm:py-8 lg:py-12'>
            <div className='mx-auto'>
                <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
                    <div>
                        <div className='h-128 overflow-hidden rounded-lg bg-gray'>
                            <Image className='h-full w-full object-cover object-center'
                                src={src}
                                width={600} height={1000}
                                alt={alt} />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-bold'>{heading}</h1>
                        <p className='md:text-center'>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaObject;