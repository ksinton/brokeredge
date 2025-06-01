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
            <div className={SiteSpecificStyles.standardPageCont(host)}>

                <h1 className={SiteSpecificStyles.standardHeading(host)}>{heading}</h1>

                <>
                    {children}
                </>
            </div>
        </div>

    );
}
