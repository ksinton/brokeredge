'use client';

import BusinessInterface from "../types/BusinessInterface";
import React, {useRef} from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';

export default function BusinessListing({BusinessData} : { BusinessData: BusinessInterface} )
{

    const swiperRef = useRef<SwiperType>();

    return (
        <div className="text-gray-700 md:mx-4 p-4">
            <h1 className="text-2xl text-brand-primary">{BusinessData.name}</h1>

            <div className="flex flex-col md:flex-row gap-8 pt-5">

                <div className="flex flex-col gap-2">
                    <div><span className="font-bold">Desired Price</span> {BusinessData.price}</div>
                    <div className=""><span className="font-bold">Industry</span> {BusinessData.industry}</div>
                    <div className=""><span className="font-bold">Sub Industry</span> {BusinessData.subIndustry}
                    </div>
                    <div className=""><span
                        className="font-bold">Reason for selling</span> {BusinessData.reasonForSelling}</div>
                    <div className=""><span
                        className="font-bold">Assistance to buyer</span> {BusinessData.assistanceToBuyer}</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className=""><span
                        className="font-bold">Seller Financing</span> {BusinessData.sellerFinancing}
                    </div>
                    <div className=""><span className="font-bold">Business Phone</span> {BusinessData.phone}
                    </div>
                    <div className=""><span className="font-bold">Business Email</span> {BusinessData.email}
                    </div>
                    <div className=""><span className="font-bold">Website</span> {BusinessData.website}</div>
                    <div className=""><span
                        className="font-bold">Business Start Date</span> {BusinessData.startDate}
                    </div>
                </div>

            </div>


            <div className="flex pt-10">

                <div>


                    <div className="pb-[150px] leading-[28px]">
                        {BusinessData.description}
                    </div>
                </div>

                <div className="relative">

                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Navigation]}
                        direction="vertical"
                        zoom={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        style={{height: '500px', width: '400px'}}
                    >
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <Image src="/businesses/sun-keto/sunKetoGrassFedButter.jpg" alt="1" width="600"
                                       height="600"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <Image src="/businesses/sun-keto/sunketopilinuts.jpg" alt="2" width="600" height="600"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <Image src="/img1.jpg" alt="1" width="300" height="300"
                                       className="h-64 w-64 bg-gray-300 m-4"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img src="/img2.jpg" alt="2" className="h-64 w-64 bg-gray-300 m-4"/>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                    <button onClick={() => swiperRef.current?.slidePrev()}
                            className="p-2 bg-gray-200 rounded absolute top-0 z-10 left-[calc(50%-24px)]">Prev
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}
                            className="p-2 bg-gray-200 rounded absolute bottom-0 z-10 left-[calc(50%-24px)]">Next
                    </button>

                </div>

            </div>


        </div>
    )

}