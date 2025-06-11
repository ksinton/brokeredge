import React from 'react';
import  Link from 'next/link';
import Listings from "./components/Listings";
import listingInterface from "./types/ListingInterface";
import SiteSpecificStyles from "./utils/SiteSpecificStyles";
import SiteSpecificContent  from './utils/SiteSpecificContent'
import { headers } from 'next/headers';
import {getBusinesses} from "../lib/rest/business";

export default async function Home() {

    const host = headers().get('x-custom-host') || '';
    const forwardedProto = headers().get('x-forwarded-proto'); // set by reverse proxies (like Vercel, Nginx)
    const protocol = forwardedProto ?? 'http';

    let listingsData: listingInterface[] = [];

    const businessesResponse: any = await getBusinesses(host, protocol);

    console.log("businessesResponse:", businessesResponse);

    if (businessesResponse.success === true) {
        listingsData = businessesResponse.data
    }

  return (
      <>
          <div className={SiteSpecificStyles.headingCTAContainer(host)}>

              <div className={SiteSpecificStyles.headingContainer(host)}>
                  <h1 className={SiteSpecificStyles.mainPageHeading(host)}>{ SiteSpecificContent.mainPageTitle(host) }</h1>

                  <div className="flex space-x-4 text-forground-form-field">

                  </div>

                  <Link href="/sell-your-business">
                      <button role="button"
                              className={SiteSpecificStyles.sellYourBusinessCta(host)}>
                          Sell Your Business
                      </button>
                  </Link>

              </div>
          </div>

          <Listings initialData={listingsData} host={host} />
      </>

  );
}
