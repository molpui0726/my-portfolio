import React from 'react';
import Layout from '@/app/Layout';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div>
            <Layout>
                <div className='bg-white py-6 sm:py-8 lg:py-12'>
                    <div className='mx-auto'>
                        <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
                            <div>
                                <div className='h-128 overflow-hidden rounded-lg bg-gray'>
                                    <Image src='/images/robot_and_hogeta.jpeg' width={600} height={1000} alt='走行体とホゲータ' />
                                </div>
                            </div>
                            <h1 className='text-center text-2xl font-bold'>About Me</h1>
                            <p className='md:text-center'>宮崎大学所属の木村優哉です！</p>
                        </div>
                    </div>
                </div>
                <p>作成中</p>
                <Link href="/">Go back to Home</Link>
            </Layout>
        </div>
    );
};

export default About;