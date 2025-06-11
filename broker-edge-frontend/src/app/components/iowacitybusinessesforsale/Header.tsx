import Image from "next/image";
import React from 'react';
import { Shadows_Into_Light } from 'next/font/google';
import { ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Link from "next/link";
import TopMenu from "../TopMenu";
import {MenuItem} from "../../types/menuInterface";
import {headers} from "next/headers";

const shadowsIntoLight = Shadows_Into_Light({
    subsets: ['latin'],
    weight: '400',
});

export default function Header() {

    const host = headers().get('x-custom-host') || '';

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
        <>

            <TopMenu menuItems={menuItems} host={host}/>
            
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
                    className="w-[82%] md:hidden mt-3 ml-3"
                />
            </Link>

        </>


    );
}