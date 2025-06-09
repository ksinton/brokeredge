import Image from "next/image";
import React from 'react';
import Link from "next/link";
import TopMenu from "../TopMenu";
import {MenuItem} from "../../types/menuInterface";

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
            <TopMenu menuItems={menuItems}/>

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