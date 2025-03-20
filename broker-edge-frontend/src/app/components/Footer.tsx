import Image from "next/image";
import React from 'react';

export default function Footer() {
    return (
            <div className="bg-gradient-to-b from-[#0e5423] to-[#0e461f] pt-4 flex h-[167px] md:h-[114px] bg-left-top flex justify-center text-white text-m fixed w-full bottom-0">
                <div className="flex flex-col items-center space-y-4">
                    <div
                        className="flex flex-col md:flex-row md:w-full space-x-0 md:space-x-4 space-y-2 md:space-y-0 items-center">
                        <div>Receive new business listings in your inbox</div>
                        <div className="flex space-x-4 items-center">
                            <div><input type="text" placeholder="your email address"
                                        className="rounded px-3 py-1 w-52 md:w-64"/></div>
                            <button role="button"
                                    className="bg-transparent border-[1px] border-white border-solid px-6 py-1 rounded-lg text-sm">
                                Sign Up
                            </button>
                        </div>

                    </div>
                    <div className="space-x-3 w-[300px] md:w-auto items-center leading-7 md:leading-4 text-center">
                        Business Owner Login &nbsp;|&nbsp; Contact Us &nbsp;|&nbsp; About Us &nbsp;|&nbsp; List Your
                        Business
                    </div>
                </div>
        </div>
    );
}