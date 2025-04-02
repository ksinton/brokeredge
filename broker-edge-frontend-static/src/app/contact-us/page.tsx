import React from 'react';
import  Link from 'next/link';

export default function Home() {

    return (
        <div>
            <div className="text-gray-700 md:mx-4 p-4">

                <h1 className="text-2xl text-brand-primary pb-4">Contact Us</h1>

                <p className="pb-4">
                    Email: jordi@brokeredge.com
                </p>

                <p className="pb-4">
                    Call: 641-451-1655
                </p>

                <p className="pb-4">
                    Broker Edge Inc<br/>
                    PO Box 277<br/>
                    Fairfield, IA<br/>
                    52556, USA<br/>
                </p>

            </div>
        </div>

    );
}
