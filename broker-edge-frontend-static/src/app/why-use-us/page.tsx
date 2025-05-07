import React from 'react';
import StandardPage from "../components/StandardPage";
import { headers } from 'next/headers';
import SiteSpecificContent  from '../utils/SiteSpecificContent'

export default function Home() {

    const host = headers().get('x-custom-host') || '';

    return (
        <StandardPage heading="Why Use Us">
            <p className="pb-4">
                At { SiteSpecificContent.siteName(host) }, we offer white-glove service to our first clients, ensuring a
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
        </StandardPage>

    );
}
