'use client';

import BusinessInterface from "../types/BusinessInterface";
import React, {useState, useRef} from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';

export default function BusinessListing({BusinessData} : { BusinessData: BusinessInterface} ) {

    const swiperRef = useRef<SwiperType>();
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 2;

    return (

    <>

    <div className="text-gray-700 md:mx-4 p-4">
        <h1 className="text-3xl text-brand-primary">{BusinessData.name}</h1>
        <div className="text-lg pt-2">Industry {BusinessData.industry} / {BusinessData.subIndustry}</div>
    </div>

    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 bg-[#f7f6f6] text-gray-700 w-full">

        <div className="flex flex-col gap-6 md:gap-8 text-lg">
            <div className="flex items-center gap-2 min-h-[58px]">
                <Image src="/icons/price_tag.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Desired Price {BusinessData.price}
            </div>
            <div className="flex items-center gap-2">
                <Image src="/icons/house.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Selling for {BusinessData.reasonForSelling}
            </div>

        </div>

        <div className="flex flex-col gap-6 md:gap-8 text-lg">
            <div className="flex items-center gap-2 min-h-[58px]">
                <Image src="/icons/money.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Seller Financing: {BusinessData.sellerFinancing}
            </div>
            <div className="flex items-center gap-2">
                <Image src="/icons/rocketship.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Business established {BusinessData.startDate}
            </div>

        </div>

        <div className="flex flex-col gap-6 md:gap-8 text-lg">
            <div className="flex items-center gap-2 min-h-[58px]">
                <Image src="/icons/phone.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                {BusinessData.phone}<br/>
                {BusinessData.email}

            </div>
            <div className="flex items-center gap-2">
                <Image src="/icons/arrows.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Successor Onboarding: {BusinessData.assistanceToBuyer}
            </div>

        </div>

    </div>

    <div className="text-gray-700 md:mx-4 p-4">

        <div className="flex pt-0 md:pt-4 flex-col md:flex-row">

            <div>
                <div className="md:pb-[150px] leading-[28px] leading-7">
                    {BusinessData.description}
                </div>
            </div>

            <div className="relative mt-[15px] md:mt-0">

                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    modules={[Navigation]}
                    direction="vertical"
                    zoom={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="w-[291px] h-[440px] md:h-[481px] md:w-[320px]"
                >
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <Image src="/businesses/sun-keto/sunKetoGrassFedButter.jpg" alt="1" width="582"
                                   height="879" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <Image src="/businesses/sun-keto/sunketopilinuts.jpg" alt="2" width="600" height="600"/>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {activeIndex > 0 && (
                <button onClick={() => swiperRef.current?.slidePrev()}
                        className="p-2 bg-gray-200 rounded absolute top-[5px] md:top-0 z-10 left-[calc(50%-24px)]">Prev
                </button>
                )}

                {activeIndex < totalSlides - 1 && (
                <button onClick={() => swiperRef.current?.slideNext()}
                        className="p-2 bg-gray-200 rounded absolute bottom-0 z-10 left-[calc(50%-24px)]">Next
                </button>
                )}

            </div>

        </div>

    </div>

    </>
)

}