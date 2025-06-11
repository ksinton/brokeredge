import Image from "next/image";
import React from 'react';
import Link from "next/link";
import TopMenu from "../TopMenu";
import {MenuItem} from "../../types/menuInterface";
import {headers} from "next/headers";

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
            text: "Press",
            link: "/press",
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