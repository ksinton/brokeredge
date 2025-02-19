'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import React,{useRef } from 'react';
import Link from "next/link";
import {Business, useBusinessStore} from "../../../lib/store";

export default function SignupCategorization() {

    const router = useRouter();

    const nameField = useRef<HTMLInputElement>(null);
    const phoneField = useRef<HTMLInputElement>(null);
    const emailField = useRef<HTMLInputElement>(null);

    const business = useBusinessStore(state => state.business);
    const updateBusiness = useBusinessStore(state => state.updateBusiness);

    const handleContinueClick = ():void => {
        console.log("inside handle click continue");

        if (nameField.current === null || phoneField.current === null || emailField.current === null) {
            return;
        }

        if (!nameField.current.checkValidity()) {
            nameField.current.reportValidity();
            return;
        }

        if (!phoneField.current.checkValidity()) {
            phoneField.current.reportValidity();
            return;
        }

        if (!phoneField.current.checkValidity()) {
            phoneField.current.reportValidity();
            return;
        }

        const updatedBusiness: Business = {
            name: nameField.current.value + 1,
            phone: phoneField.current.value + 1,
            email: emailField.current.value + 1,
        };

        updateBusiness(updatedBusiness);
    };

    return (
        <div className="flex flex-col text-standard-text-color p-5">

            <h1 className="text-2xl mb-6">List your business - Categorization </h1>

            <div className="grid md:grid-cols-[auto_1fr] gap-1 md:gap-4">

                <div className="">Industry:</div>
                <div className="form-right-col mb-3 md:mb-0">

                    <select className="w-full border-brand-primary border-2 rounded-lg">
                        <option value="">Select One</option>
                        <option value="">Industry One</option>
                        <option value="">Industry Two</option>
                    </select>

                </div>

                <div className="">Sub Industry::</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <select className="w-full border-brand-primary border-2 rounded-lg">
                        <option value="">Select One</option>
                        <option value="">Sub Industry One</option>
                        <option value="">Sub Industry Two</option>
                    </select>
                </div>

                <div className="">Business Model:</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <select className="w-full border-brand-primary border-2 rounded-lg">
                        <option value="">Select One</option>
                        <option value="">Business One</option>
                        <option value="">Business Two</option>
                    </select>
                </div>

                <div className="">Business Start Date:</div>
                <div className="form-right-col mb-3 md:mb-0 space-x-[10px]">
                    <select className="w-[calc(66.6%-7px)] border-brand-primary border-2 rounded-lg">
                        <option value="">Month</option>
                        <option value="">Business One</option>
                        <option value="">Business Two</option>
                    </select>
                    <select className="w-[calc(33.3%-3px)] border-brand-primary border-2 rounded-lg">
                        <option value="">Year</option>
                        <option value="">Business One</option>
                        <option value="">Business Two</option>
                    </select>
                </div>

                <div>&nbsp;</div>
                <div className="flex justify-end max-w-[400px]">
                    <Link href="/signup/basic">
                        <button role="button" className="standard-button"
                                onClick={handleContinueClick}>Continue &gt;&gt;</button>
                    </Link>
                </div>

            </div>

        </div>
    );
}
