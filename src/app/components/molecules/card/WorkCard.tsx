import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/app/components/organisms/Modal"

type WorkCardProps = {
    src: string;
    alt?: string;
    workTitle: string;
    techs: string[];
    onClick: () => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ src, alt, workTitle, techs, onClick }) => {
    return (
        <a onClick={onClick}>
            <div className="flex justify-center w-full">
                <div className="relative group flex flex-col shadow-2xl rounded-xl overflow-hidden md:w-80 md:-ml-16">
                    <Image className="object-cover object-center w-full rounded-t-xl lg:h-60 md:h-48"
                        src={src}
                        alt={alt ?? workTitle}
                        width={600}
                        height={600} />
                    <div className="bg-white w-full h-full transition duration-500 ease-in-out delay-150 group-hover:translate-y-[-100px]">
                        <div className="px-6 mt-8">
                            <h1 className="mt-4 mb-4 text-2xl font-semibold text-neutral-600">{workTitle}</h1>
                            <div className="overflow-hidden">
                                <div className="h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                    {techs.map((item, index) => (
                                        <p key={index} className="text-base font-normal text-gray-500 leading-relax">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};
