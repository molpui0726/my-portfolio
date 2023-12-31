import React from 'react';
import Layout from '@/app/layout';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div>
            <Layout>
                <h1>About Me</h1>
                <p>作成中</p>
                <Link href="/">Go back to Home</Link>
            </Layout>
        </div>
    );
};

export default About;