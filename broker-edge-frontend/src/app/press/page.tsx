import React from 'react';
import StandardPage from "../components/StandardPage"
import { headers } from 'next/headers';
import SiteSpecificContent  from '../utils/SiteSpecificContent'

export default function Page() {

    const host = headers().get('x-custom-host') || '';

    return (
        <StandardPage heading="Press">

            <a href="https://finance.yahoo.com/news/broker-edge-launches-reinvigorate-business-183600039.html">
                <p className="font-bold pb-1">May 16, 2025</p>

                <p className="pb-4">
                    Yahoo Finance: Broker Edge Launches to Reinvigorate the Business Succession Market Amid Silver
                    Tsunami
                </p>
            </a>

            <a href="https://www.newsfilecorp.com/release/252465/Broker-Edge-Launches-to-Reinvigorate-the-Business-Succession-Market-Amid-Silver-Tsunami">
                <p className="font-bold pb-1">May 16, 2025</p>

                <p className="pb-4">
                    Newsfile: Broker Edge Launches to Reinvigorate the Business Succession Market Amid Silver Tsunami
                </p>
            </a>

            <a href="https://www.dominicanrepublicbusinessinsider.com/article/813359763-broker-edge-launches-to-reinvigorate-the-business-succession-market-amid-silver-tsunami">
                <p className="font-bold pb-1">May 16, 2025</p>

                <p className="pb-4">
                    Dominican Republic Business Insider: Broker Edge Launches to Reinvigorate the Business Succession
                    Market Amid Silver Tsunami
                </p>
            </a>

            <a href="https://www.southeastiowaunion.com/news/fairfield-entrepreneurs-hope-to-connect-retiring-business-owners-with-next-generation/">
                <p className="font-bold pb-1">May 6, 2025</p>

                <p className="pb-4">
                    Southeast Iowa Union: Fairfield entrepreneurs hope to connect retiring business owners with next
                    generation
                </p>
            </a>


        </StandardPage>
    );
}
