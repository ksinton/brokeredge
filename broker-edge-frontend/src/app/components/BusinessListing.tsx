'use client';

import BusinessInterface from "../types/BusinessInterface";
import React, {useState, useRef} from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/zoom';
import SiteSpecificStyles from "../utils/SiteSpecificStyles";

export default function BusinessListing({BusinessData, host} : { BusinessData: any, host: string } ) {

    const swiperRef = useRef<SwiperType>();
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);
    //const totalSlides = BusinessData.numberOfImages;

    console.log("BusinessData ********", BusinessData);

    return (

    <>

    <div className="text-gray-700 md:mx-4 p-4">
        <h1 className={SiteSpecificStyles.listingHeading(host)}>{BusinessData.name}</h1>
        <div className="text-lg pt-2">{BusinessData.industry_name} / {BusinessData.sub_industry_name}</div>
    </div>

    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 bg-[#f7f6f6] text-gray-700 w-full">

        <div className="flex flex-col gap-6 md:gap-8 text-lg">
            <div className="flex items-center gap-2 min-h-[58px]">
                <Image src="/icons/price_tag.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Desired Price ${BusinessData.desired_price}
            </div>
            <div className="flex items-center gap-2">
                <Image src="/icons/house.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                <div>
                    <div>Selling For:</div>
                    <div className="capitalize">{BusinessData.reason_for_selling}</div>
                </div>

                <br/>
            </div>

        </div>

        <div className="flex flex-col gap-6 md:gap-8 text-lg">
            <div className="flex items-center gap-2 min-h-[58px]">
                <Image src="/icons/money.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                Seller Financing: {BusinessData.seller_financing}
            </div>
            <div className="flex items-center gap-2">
                <Image src="/icons/rocketship.png" alt="1" width="55" height="55" className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                <div>
                    <div>Business Established:</div>
                    <div>{BusinessData.start_date_month} / {BusinessData.start_date_year}</div>
                </div>

            </div>

        </div>

        <div className="flex flex-col gap-6 md:gap-8 text-lg">
            <div className="flex items-center gap-2 min-h-[58px]">
                <Image src="/icons/phone.png" alt="1" width="55" height="55" className="h-[27px] w-[27px] md:h-[31px] md:w-[31px] mr-1"/>
                {BusinessData.phone}<br/>
                {BusinessData.email}

            </div>
            <div className="flex items-center gap-2">
                <Image src="/icons/arrows.png" alt="1" width="55" height="55" className="block h-[30px] w-[30px] md:h-[35px] md:w-[35px] mr-1"/>
                <div>
                    <div>Successor Onboarding:</div>
                    <div className="capitalize">{BusinessData.successor_onboarding}</div>
                </div>
            </div>

        </div>

    </div>

        <div className="text-gray-700 md:mx-4 p-4">

            <div className="flex pt-0 md:pt-4 flex-col gap-4 md:flex-row">

            <div>
                <div className="md:pb-[150px] leading-[28px]">
                    {BusinessData.sellers_description}
                </div>
            </div>

            <div className="relative mt-[20px] pb-[23px] md:mt-20px">

                {/*<Swiper*/}
                {/*    onSwiper={(swiper) => (swiperRef.current = swiper)}*/}
                {/*    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}*/}
                {/*    modules={[Navigation, Autoplay]}*/}
                {/*    autoplay={{*/}
                {/*        delay: 5000, // ✅ 3 seconds between slides*/}
                {/*        disableOnInteraction: false, // ✅ keeps autoplay even after user interaction*/}
                {/*    }}*/}
                {/*    direction="vertical"*/}
                {/*    zoom={true}*/}
                {/*    spaceBetween={10}*/}
                {/*    slidesPerView={1}*/}
                {/*    className="w-[291px] h-[440px] md:h-[481px] md:w-[320px] lg:h-[553px] lg:w-[368px] xl:h-[601.25px] xl:w-[400px]"*/}
                {/*>*/}
                {/*    {BusinessData.images.map((image, index) => {*/}

                {/*        return(*/}
                {/*            <SwiperSlide key={index}>*/}
                {/*                <div className="swiper-zoom-container">*/}
                {/*                    <Image src={image} alt="1" width="638" height="879"*/}
                {/*                           className="cursor-pointer"*/}
                {/*                           onClick={() => {*/}
                {/*                                setOpenIndex(index);*/}
                {/*                                setOpen(true);*/}
                {/*                    }}/>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*        );*/}

                {/*    })}*/}

                {/*</Swiper>*/}

                {/*{activeIndex > 0 && (*/}
                {/*    <Image src="/icons/arrow.png" alt="previous image arrow" width="35" height="19" onClick={() => swiperRef.current?.slidePrev()}*/}
                {/*        className="absolute top-0 z-10 left-[calc(50%-24px)] cursor-pointer"/>*/}
                {/*)}*/}

                {/*{(totalSlides > 0 && activeIndex < totalSlides - 1) && (*/}
                {/*    <Image src="/icons/arrow.png" alt="next image arrow" width="35" height="19" onClick={() => swiperRef.current?.slideNext()}*/}
                {/*           className="absolute bottom-0  rotate-180 z-10 left-[calc(50%-8px)] cursor-pointer"/>*/}
                {/*)}*/}

            </div>

        </div>

    </div>

    {open && (
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            styles={{container: { backgroundColor: "rgba(0, 0, 0, .7)" }, slide: {height: "90vh", top:"50%", transform: "translateY(-50%)"} }}
            index={openIndex}
            slides={BusinessData.images.map((src : any) => ({ src }))}
            controller={{
                closeOnBackdropClick: true
            }} // Enable closing on overlay click
        />
    )}

    </>
)

}