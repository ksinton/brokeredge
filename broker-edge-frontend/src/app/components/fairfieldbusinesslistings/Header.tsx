import Image from "next/image";
import React from 'react';
import { Shadows_Into_Light } from 'next/font/google';
import Link from "next/link";
import TopMenu from "../TopMenu";
import {MenuItem} from "../../types/menuInterface";

const shadowsIntoLight = Shadows_Into_Light({
    subsets: ['latin'],
    weight: '400',
});

export default function Header() {

    const menuItems:  MenuItem[] = [
        {
            text: "Home",
            link: "/",
        },
        {
            text: "Sell Your Business",
            link: "/sell-your-business",
        },
        {
            text: "Why Use Us",
            link: "/why-use-us",
        },
        {
            text: "Contact Us",
            link: "/contact-us",
        },
    ]

    return (
        <div className="bg-header-background w-full relative ">

            <Link href="/">
                <Image
                    src="/sites/fairfield/logo.png"
                    width={148}
                    height={148}
                    alt="sjfhjksfhs"
                    className="z-10 absolute w-[74px] h-[74px] md:w-[111px] md:h-[111px] lg:w-[148px] lg:h-[148px] top-[4px] md:top-[44px] left-[10px] md:left-[33px]"
                />
            </Link>

            <TopMenu menuItems={menuItems}/>

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