import React from 'react';
import BusinessListing from "../../components/BusinessListing";
import businessInterface from "../../types/BusinessInterface";
import { getBusiness } from "../../../lib/rest/business";
import { headers } from 'next/headers';

export default async  function Page({ params } : { params: any }) {

    const host = headers().get('x-custom-host') || '';
    const forwardedProto = headers().get('x-forwarded-proto'); // set by reverse proxies (like Vercel, Nginx)
    const protocol = forwardedProto ?? 'http';
    const route = params.route;
    let businessData : any = null;

    const businessDataResponse : any = await getBusiness(route, protocol);

    // console.log("businessDataResponse", businessDataResponse);

    if (businessDataResponse.success === true) {
        businessData = businessDataResponse.data;
    }

    // console.log("businessData222222", businessData);

    return (
        <>
            <BusinessListing BusinessData={businessData} host={host}/>
        </>

    );
}
