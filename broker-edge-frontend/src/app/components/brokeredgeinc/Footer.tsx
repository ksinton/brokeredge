import Image from "next/image";
import React from 'react';

export default function Footer() {
    return (
            <div className="bg-[#04112b] pt-4 flex h-[100px] md:h-[80px] bg-left-top flex justify-center text-white text-m w-full bottom-0">
                <div className="flex flex-col items-center space-y-4">
                    <div className="space-x-3 w-[300px] md:w-auto items-center leading-7 md:leading-4 text-center">
                       Powered by Broker Edge. &nbsp;Copyright Broker Edge Inc 2025
                    </div>
                </div>
            </div>
    );
}