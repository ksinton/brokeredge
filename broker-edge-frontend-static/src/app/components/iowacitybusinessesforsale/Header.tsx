import Image from "next/image";
import React from 'react';
import { Shadows_Into_Light } from 'next/font/google';
import { ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Link from "next/link";

const shadowsIntoLight = Shadows_Into_Light({
    subsets: ['latin'],
    weight: '400',
});

export default function Header() {
    return (
        <>

            <div
                className="bg-[#200571] flex space-between p-0 md:p-3 h-[23px] md:h-[47px]">
                <div className="hidden md:flex space-x-4 text-m ml-1">
                    <div className="flex space-x-1 items-center">
                        <ChevronRightIcon className="w-4 h-4"/>
                        <Link href="/sell-your-business">
                            <div>Sell Your Business</div>
                        </Link>

                    </div>
                    <div className="flex space-x-1 items-center">
                        <ChevronRightIcon className="w-4 h-4"/>
                        <Link href="/why-use-us">
                            <div>Why Use Us</div>
                        </Link>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <ChevronRightIcon className="w-4 h-4"/>
                        <Link href="/contact-us">
                            <div>Contact Us</div>
                        </Link>
                    </div>
                </div>


            </div>
            
            <Link href="/">
                <Image
                    src="/sites/iowa-city/iowa_city_header.png"
                    width={1390}
                    height={156}
                    alt="sjfhjksfhs"
                    className="hidden md:block w-[84%] lg:w-[70%] mt-6 ml-6"
                />

                <Image
                    src="/sites/iowa-city/iowa_city_header_mobile.png"
                    width={1390}
                    height={156}
                    alt="sjfhjksfhs"
                    className="w-[93%] md:hidden mt-3 ml-3"
                />
            </Link>

        </>


    );
}