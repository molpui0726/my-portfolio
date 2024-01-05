import React, { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type NavButtonProps = {
    href: string;
    children: ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children }: NavButtonProps) => {

    const router = useRouter();
    const isActive = router.pathname === href;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href}
            className={`bg-neutral-950 text-stone-300 text-base px-2 py-1 rounded-full text-transition md:duration-700 ease-in-out
                    ${isActive ? "!bg-white text-stone-600 text-lg" : ""}
                    ${isHovered ? "hover:bg-white hover:text-black hover:text-lg" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </Link>
    );
};

export default NavButton;
