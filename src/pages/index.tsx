import 'tailwindcss/tailwind.css';
import React from "react";
import Link from "next/link";
import Header from "@/components/organisms/Header";

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>My Portfolio</h1>
            <nav>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Home;
