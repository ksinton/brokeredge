import React from 'react';
import  Link from 'next/link';

export default function Home() {

    return (
        <div>
            <div className="text-gray-700 md:mx-4 p-4">

                <h1 className="text-2xl text-brand-primary pb-4">Why Use Us</h1>

                <p className="pb-4">
                    At Fairfield Business Listings, we offer white-glove service to our first clients, ensuring a
                    seamless and dedicated experience.
                </p>

                <p className="pb-4">
                    We go above and beyond to get your business sold—handling every detail with care and determination.
                    Unlike other brokerages, we charge no upfront fees, so you pay only when we deliver results.
                </p>

                <p className="pb-4">
                    Our comprehensive marketing strategy includes:
                </p>

                <ul className="pl-8 pb-4">
                    <li className="list-disc pb-2">Traditional advertising to reach serious buyers</li>
                    <li className="list-disc pb-2">Targeted social media campaigns to maximize exposure</li>
                    <li className="list-disc pb-2">Community events to connect with potential investors</li>
                    <li className="list-disc pb-2">Community events to connect with potential investors</li>
                </ul>

                <p className="pb-4">
                    Call us today for a free consultation: <b>641-451-1655</b>
                </p>

            </div>
        </div>

    );
}
