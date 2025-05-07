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
        <div className="bg-header-background w-full relative ">

            <Link href="/">
                <Image
                    src="/sites/fairfield/logo.png"
                    width={148}
                    height={148}
                    alt="sjfhjksfhs"
                    className="z-10 absolute w-[74px] h-[74px] md:w-[111px] md:h-[111px] lg:w-[148px] lg:h-[148px] top-[27px] md:top-[44px] left-[10px] md:left-[33px]"
                />
            </Link>

            <div
                className="flex space-between mx:0 md:mx-4 p-0 md:p-3 bg-[#326427] md:bg-top-menu-background h-[23px] md:h-[47px]">
                <div className="hidden md:flex space-x-4 text-m">
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

            <div className="relative h-[82px] md:h-[122px] lg:h-[163px]">

                <div
                    className="bg-white w-full h-[53px] md:h-[73px] lg:h-[97px] absolute top-1/2 -translate-y-1/2 z-1 text-logo-text-color">
                    <h1
                        className={`${shadowsIntoLight.className} block absolute top-1/2 -translate-y-1/2 text-[23px] md:text-[31px] lg:text-[42px] left-[97px] md:left-[163px] lg:left-[197px] tracking-[1.4px] md:tracking-[4px]`}
                        style={{wordSpacing: '-2px'}}
                    >
                        Fairfield
                        Business Listings</h1>
                </div>

                <div className="bg-header-background w-full h-full">
                    <div
                        className="mx-0 md:mx-4 bg-mobile-header-background md:bg-[url('/sell-a-business-in-fairfield-iowa.jpg')] h-full">
                        <div className="text-forground-light flex space-x-8">
                            &nbsp;
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}