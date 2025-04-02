import Image from "next/image";
import React from 'react';

export default function Footer() {
    return (
            <div className="bg-gradient-to-b from-[#0e5423] to-[#0e461f] pt-8 flex h-[167px] md:h-[80px] bg-left-top flex justify-center text-white text-m fixed w-full bottom-0">
                <div className="flex flex-col items-center space-y-4">
                    <div className="space-x-3 w-[300px] md:w-auto items-center leading-7 md:leading-4 text-center">
                       Powered by Brokers Edge technology. &nbsp;Copyright Brokers Edge Inc 2025
                    </div>
                </div>
        </div>
    );
}