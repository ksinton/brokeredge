import React from 'react';
import StandardPage from "../components/StandardPage";

export default function Home() {

    return (
        <StandardPage heading="Contact Us">
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
        </StandardPage>

    );
}
