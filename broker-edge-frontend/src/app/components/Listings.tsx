'use client';
import Link from "next/link";
import React, { useState } from 'react';
import ListingInterface from "../types/ListingInterface";
import SiteSpecificStyles from "../utils/SiteSpecificStyles";
import Utils from "../utils/Utils";

export default function Listings({initialData, host} : {
    initialData: ListingInterface[],
    host: string;

    }
) {

    const [listings, setListings] = useState(initialData);

    return (
        <>
            <div className={SiteSpecificStyles.listingsCont(host)}>
                {
                    listings.slice(0, 3).map((listing: ListingInterface, index) => {
                        return (
                            <Link href={`businesses/${listing.route}`} key={index}>
                                <div
                                className={SiteSpecificStyles.listing(host)}>
                                <div className="font-bold text-lg mb-2">{listing.name}</div>
                                <div className="mb-6">{listing.sellers_description.substring(0, 330)}..</div>
                                <div
                                    className={SiteSpecificStyles.listingPriceCont(host)}>${Utils.formatPrice(listing.desired_price)}
                                </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>

            <div className="text-gray-700 md:mx-4 grid grid-cols-1 md:grid-cols-4 gap-4 pb-32">
                {
                    listings.slice(3,7).map((listing: ListingInterface, index) => {
                        return (<div
                            key={index}
                            className="border border-gray-300 p-5 rounded-xl relative">
                            <div className="font-bold text-lg mb-2">{listing.name}</div>
                            <div className="mb-6">{listing.sellers_description.substring(0, 250)}..</div>
                            <div
                                className="absolute right-0 bottom-0 rounded-br-xl rounded-tl bg-[#ededed] py-1 px-3">${Math.round(listing.desired_price / 1000)}k
                            </div>
                        </div>);
                    })
                }
            </div>
            </>
            );
            }