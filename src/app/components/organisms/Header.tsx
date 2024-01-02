import React from "react";
import Link from "next/link";
import NavButton from "@/components/atoms/button/NavButton";

const Header = () => {
    return (
        <div className="bg-black text-white p-4">
            <nav className="flex gap-4">
                <NavButton href="../">Home</NavButton>
                <NavButton href="/about">About</NavButton>
                <NavButton href="/contact">Contact</NavButton>
            </nav>
        </div>
    );
};

export default Header;
