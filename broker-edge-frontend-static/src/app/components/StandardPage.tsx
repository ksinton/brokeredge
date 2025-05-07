import React from 'react';
import { headers } from 'next/headers';
import SiteSpecificStyles from "../utils/SiteSpecificStyles";

export default function StandardPage({ heading, children }: {
    heading: string;
    children: React.ReactNode;
}) {

    const host = headers().get('x-custom-host') || '';

    return (
        <div>
            <div className="text-gray-700 md:mx-4 p-4">

                <h1 className={SiteSpecificStyles.standardHeading(host)}>{heading}</h1>

                <>
                    {children}
                </>
            </div>
        </div>

    );
}
