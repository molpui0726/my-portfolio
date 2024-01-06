import React from 'react';
import Layout from '@/app/Layout';
import Link from 'next/link';

const Contact: React.FC = () => {
    return (
        <div>
            <Layout>
                <h1>Contact Me</h1>
                <p>作成中</p>
                <Link href="/">Go back to Home</Link>
            </Layout>
        </div>
    );
};

export default Contact;