import React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/components/organisms/Header';

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
