import React from 'react';
import StandardPage from "../components/StandardPage"
import { headers } from 'next/headers';
import SiteSpecificContent  from '../utils/SiteSpecificContent'

export default function SellYourBusinessPage() {

    const host = headers().get('x-custom-host') || '';

    return (
        <StandardPage heading="Sell Your Business">
            <p className="pb-4">
                { SiteSpecificContent.siteName(host) } functions as a full sercvice business brokerage for businesses
                located in { SiteSpecificContent.siteLocation(host) }.
            </p>

            <p className="pb-4">
                We actively promote businesses who list with us through:
            </p>

            <ul className="pl-8 pb-4">
                <li className="list-disc pb-2">An active listing on our site</li>
                <li className="list-disc pb-2">Social Media</li>
                <li className="list-disc pb-2">Community Events</li>
                <li className="list-disc pb-2">Calling prospective buyers on your behalf</li>
            </ul>

            <p className="pb-4">
                Call us today for a free consultation: <b>641-451-1655</b>
            </p>
        </StandardPage>
    );
}
