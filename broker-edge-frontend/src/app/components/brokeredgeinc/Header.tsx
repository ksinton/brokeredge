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
                className="bg-[#04112b] flex space-between p-0 md:p-3 h-[23px] md:h-[38px]">
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
                        <Link href="/newsroom">
                            <div>Newsroom</div>
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
                    src="/sites/brokeredge/logo.png"
                    width={149}
                    height={59}
                    alt="sjfhjksfhs"
                    className="hidden md:block w-[149px] lg:w-[149px] mt-5 ml-4"
                />

                <Image
                    src="/sites/brokeredge/logo.png"
                    width={149}
                    height={59}
                    alt="sjfhjksfhs"
                    className="w-[149px] lg:w-[149px] md:hidden mt-3 ml-3"
                />
            </Link>

        </>


    );
}