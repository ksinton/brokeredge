'use client';
import React, { useState } from 'react';
import ListingInterface from "../types/ListingInterface";

export default function Listings({initialData} : { initialData: ListingInterface[]} ) {

    const [listings, setListings] = useState(initialData);

    return (
        <>
            <div className="text-gray-700 md:mx-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {
                    listings.slice(0, 3).map((listing: ListingInterface, index) => {
                        return (<div
                            key={index}
                            className="border border-gray-300 p-5 rounded-xl relative"
                        >
                            <div className="font-bold text-lg mb-2">{listing.title}</div>
                            <div className="mb-6">{listing.description.substring(0, 330)}..</div>
                            <div
                                className="absolute right-0 bottom-0 rounded-br-xl rounded-tl bg-[#ededed] py-1 px-3">${Math.round(listing.price / 1000)}k
                            </div>
                        </div>);
                    })
                }
            </div>

            <div className="text-gray-700 md:mx-4 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                {
                    listings.slice(2).map((listing: ListingInterface, index) => {
                        return (<div
                            key={index}
                            className="border border-gray-300 p-5 rounded-xl relative">
                            <div className="font-bold text-lg mb-2">{listing.title}</div>
                            <div className="mb-6">{listing.description.substring(0, 250)}..</div>
                            <div
                                className="absolute right-0 bottom-0 rounded-br-xl rounded-tl bg-[#ededed] py-1 px-3">${Math.round(listing.price / 1000)}k
                            </div>
                        </div>);
                    })
                }
            </div>
            </>
            );
            }