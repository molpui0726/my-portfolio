import React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/components/organisms/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
