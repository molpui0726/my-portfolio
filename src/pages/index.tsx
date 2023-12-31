import React from "react";
import Layout from '@/app/layout';
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div>
            <Layout>
                <h1>My Portfolio</h1>
                <nav>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                </nav>
            </Layout>
        </div>
    );
};

export default Home;
