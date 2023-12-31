import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';

type NavButtonProps = {
    href: string;
    children: ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children }: NavButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handlerHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Link
            href={href}
            className={`
            ${isHovered ? 'bg-gray-800 text-white' : ''}
            px-2 py-1 rounded
            `}
            onMouseEnter={handlerHover}
            onMouseLeave={handlerHover}
        >
            {children}
        </Link>
    );
};

export default NavButton;