import React from 'react';
import  Link from 'next/link';

export default function Home() {

    return (
        <div>
            <div className="text-gray-700 md:mx-4 p-4">

                <h1 className="text-2xl text-brand-primary pb-4">Sell Your Business</h1>

                <p className="pb-4">
                    Fairfield Business Listings functions as a full sercivice business brokerage for businesses located
                    in Fairfileld Iowa.
                </p>

                <p className="pb-4">
                    We acitvely promote business who list with us through:
                </p>

                    <ul className="pl-8 pb-4">
                        <li className="list-disc pb-2">An active listing on our site</li>
                        <li className="list-disc pb-2">Social Media</li>
                        <li className="list-disc pb-2">Comminity Events</li>
                        <li className="list-disc pb-2">Calling prospective buyers on your behalf</li>
                    </ul>

                <p className="pb-4">
                    Call us today for a free consultation: <b>641-451-1655</b>
                </p>
            </div>
        </div>

    );
}
