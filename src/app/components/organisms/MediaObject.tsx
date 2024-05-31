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
                        <div className='h-128 overflow-hidden bg-gray'>
                            <Image className='rounded-lg object-cover object-center'
                                src={src}
                                width={600} height={1000}
                                alt={alt} />
                        </div>
                    </div>
                    <div>
                        <h1 className='py-2 text-center text-5xl font-bold'>{heading}</h1>
                        <p className='text-left sm:text-center animate-fade-right animate-duration-[1600ms]'>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaObject;