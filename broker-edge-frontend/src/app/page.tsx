import React from 'react';
import  Link from 'next/link';
import Listings from "./components/Listings";
import listingInterface from "./types/ListingInterface";
import SiteSpecificStyles from "./utils/SiteSpecificStyles";
import { headers } from 'next/headers';


export default function Home() {


    const host = headers().get('x-custom-host') || '';

    let listingsData: listingInterface[] = [];

    switch (true) {
        case host?.includes("iowacitybusinessesforsale.com"):
            listingsData = [
                {
                    title: "Anonymous: Amazon Business",
                    description: "This is a unique opportunity to acquire a well-established eCommerce business specializing in high-quality, organic, low-carb lifestyle products. The brand offers a curated selection of premium goods designed to support health-conscious consumers seeking convenience and great taste. With a loyal customer base and strong growth potential, this turnkey operation is ideal for entrepreneurs interested in the wellness or specialty food sectors.",
                    price: 16000,
                    link:"amazon-anonymous-a",
                },
            ];
            break;
        default:
            listingsData = [
                {
                    title: "Sun Keto",
                    description: "At Sun Keto, we are dedicated to providing high-quality, organic, keto-friendly products that help you stay on track with your low-carb, high-fat lifestyle. Our carefully curated selection of premium, nutrient-dense foods is designed to support your health goals while delivering great taste and convenience.",
                    price: 17000,
                    link:"sun-keto",
                },
            ];
    }




  return (
      <>
          <div className={SiteSpecificStyles.headingContainer(host)}>

              <div className="space-y-2 md:space-y-4 px-5 mt-3 relative w-full max-w-[430px] md:max-w-none">
                  <h1 className={SiteSpecificStyles.mainPageHeading(host)}>Buy a Local Business</h1>

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

          <Listings initialData={listingsData}/>
      </>

  );
}
