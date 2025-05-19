import React from 'react';
import BusinessListing from "../../components/BusinessListing";
import businessInterface from "../../types/BusinessInterface";
import { headers } from 'next/headers';

const businessData : businessInterface = {
    name: "Anonymous: Amazon Business",
    price: "$16,000",
    industry: "Online Business",
    subIndustry: "Online Retail",
    sellerFinancing: "Yes (up to 30%)",
    reasonForSelling: "Career Change",
    email:"jordi@brokeredgeinc.com",
    phone: "641-451-1655",
    website: "hidden",
    startDate: "hidden",
    assistanceToBuyer: "A small amount",
    numberOfImages: 0,
    images: [
    ],
    description: "This is a rare opportunity to acquire a well-established eCommerce brand focused on high-quality, organic products designed for low-carb, high-fat lifestyles. The business offers a carefully curated selection of health-conscious items that cater to consumers seeking both convenience and nutrition.\n" +
        "\n" +
        "Highlights:\n" +
        "- Consistent revenue with strong growth potential\n" +
        "- Loyal customer base in the health and wellness niche\n" +
        "- Premium product line with clean ingredients\n" +
        "- Streamlined fulfillment and operations\n" +
        "\n" +
        "The business is currently operated online with exclusive sales through a major eCommerce platform, offering fast, reliable shipping and scalability. Ideal for entrepreneurs looking to enter or expand in the wellness or specialty foods market.\n" +
        "\n" +
        "This is a turnkey opportunity with a strong brand presence and room for growth in an evergreen niche."
    ,
}

export default function Home() {

    const host = headers().get('x-custom-host') || '';

  return (
      <>
        <BusinessListing BusinessData={businessData} host={host}/>
      </>

  );
}
