'use client'

import React, {useState} from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import {MenuItem} from "../types/menuInterface";
import SiteSpecificStyles from "../utils/SiteSpecificStyles";


type Props = {
    menuItems: MenuItem[];
};

export default function TopMenu({menuItems}: Props ) {

    const host = window.location.hostname;

    const hamburgerBaseStyles = SiteSpecificStyles.hamburgerBaseStyles(host);
    const mobileMenuContBaseStyles = "absolute bg-white top-0 right-0 z-10 transition-all duration-500"
    const mobileMenuInnerContBaseStyles = SiteSpecificStyles.mobileMenuInnerContBaseStyles(host);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [hamburgerStyles, setHamburgerStyles] = useState(hamburgerBaseStyles);
    const [mobileMenuStyles, setMobileMenuStyles] = useState(`${mobileMenuContBaseStyles} w-0 h-0`);
    const [mobileMenuInnerStyles, setTopMenuInnerStyles] = useState(`${mobileMenuInnerContBaseStyles} opacity-0 hidden`);

    const openCloseMobileMenu = () => {
        if (mobileMenuOpen === true) {
            setMobileMenuOpen(false);
            setHamburgerStyles(hamburgerBaseStyles);
            setMobileMenuStyles(`${mobileMenuContBaseStyles} w-0 h-0`)
            setTopMenuInnerStyles(`${mobileMenuInnerContBaseStyles} opacity-0 hidden`)

        } else {
            setMobileMenuOpen(true);
            setHamburgerStyles(`${hamburgerBaseStyles} tham-active`);
            setMobileMenuStyles(`${mobileMenuContBaseStyles} w-screen h-screen`)
            setTopMenuInnerStyles(`${mobileMenuInnerContBaseStyles} opacity-100 block`)
        }

    }

    return (
        <>

            <div className={mobileMenuStyles}>
                <div className={mobileMenuInnerStyles}>

                    {menuItems.map((item: MenuItem) => {
                        return (
                            <div
                                className="flex space-x-1 items-center"
                                onClick={() => {
                                openCloseMobileMenu()
                                }}
                            >
                                <ChevronRightIcon className="w-8 h-8"/>
                                <Link href={item.link}>
                                    <div>{item.text}</div>
                                </Link>
                            </div>
                        )
                    })}

                </div>
            </div>


            <div
                className={hamburgerStyles}
                onClick={() => {
                    openCloseMobileMenu()
                }}
            >
                <div className="tham-box">
                    <div className={SiteSpecificStyles.hamburgerInnerStyles(host)}/>
                </div>
            </div>

            <div
                className={SiteSpecificStyles.topMenuCont(host)}>
                <div className="hidden md:flex space-x-4 text-m ml-1">

                    {
                        menuItems.map((item: MenuItem) => {
                            return (
                                <div className="flex space-x-1 items-center">
                                    <ChevronRightIcon className="w-4 h-4"/>
                                    <Link href={ item.link }>
                                        <div>{ item.text }</div>
                                    </Link>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </>


    );
}