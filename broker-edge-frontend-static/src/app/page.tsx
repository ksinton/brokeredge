import React from 'react';
import  Link from 'next/link';
import Listings from "./components/Listings";
import listingInterface from "./types/ListingInterface";


export default function Home() {

    const listingsData: listingInterface[] = [
        {
            title: "Sun Keto",
            description: "At Sun Keto, we are dedicated to providing high-quality, organic, keto-friendly products that help you stay on track with your low-carb, high-fat lifestyle. Our carefully curated selection of premium, nutrient-dense foods is designed to support your health goals while delivering great taste and convenience.",
            price: 350000,
            link:"sun-keto",
        },
    ];

  return (
      <>
          <div className="bg-gradient-to-t from-mobile-header-dark-background to-mobile-header-background md:bg-[url('/buy-a-business-in-fairfield-iowa.jpg')] mx-0 md:mx-4 flex h-[46px] md:h-[58px] bg-left-bottom">

              <div className="space-y-2 md:space-y-4 px-5 mt-3 relative w-full max-w-[430px] md:max-w-none">
                  <h1 className="block text-m md:text-[20px]">Buy a Local Business</h1>

                  <div className="flex space-x-4 text-forground-form-field">

                  </div>

                  <Link href="/sell-your-business">
                      <button role="button"
                              className="bg-transparent border-[1px] border-white border-solid px-3 md:px-6 py-1 rounded-lg absolute top-0 top-[calc(50%-9px)] md:top-[calc(50%-18px)] left-auto md:right-[30px] right-[21px] -translate-y-[22px] md:-translate-y-1/2 md:text-lg whitespace-nowrap">
                          Sell Your Business
                      </button>
                  </Link>

              </div>
          </div>

          <Listings initialData={listingsData}/>
      </>

  );
}
