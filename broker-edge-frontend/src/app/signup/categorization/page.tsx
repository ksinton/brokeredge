'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import React,{useRef } from 'react';
import Link from "next/link";
import {Business, useBusinessStore} from "../../../lib/store";
import SiteSpecificStyles from "../../utils/SiteSpecificStyles";

export default function SignupCategorization() {

    const host = window.location.hostname;

    const router = useRouter();

    const nameField = useRef<HTMLInputElement>(null);
    const phoneField = useRef<HTMLInputElement>(null);
    const emailField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);
    const passwordFieldTwo = useRef<HTMLInputElement>(null);


    const business = useBusinessStore(state => state.business);
    const updateBusiness = useBusinessStore(state => state.updateBusiness);

    const handleContinueClick = ():void => {
        console.log("inside handle click continue");

        if (nameField.current === null || phoneField.current === null || emailField.current === null || passwordField.current === null || passwordFieldTwo.current === null) {
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

        if (!passwordField.current.checkValidity()) {
            passwordField.current.reportValidity();
            return;
        }

        if (passwordField.current.value !== passwordFieldTwo.current.value) {
            passwordFieldTwo.current.setCustomValidity("Password and Verify Password fields must match!");
            passwordFieldTwo.current.reportValidity();
            return
        }

        const updatedBusiness: Business = {
            name: nameField.current.value + 1,
            phone: phoneField.current.value + 1,
            email: emailField.current.value + 1,
            password: passwordField.current.value,
        };

        updateBusiness(host, updatedBusiness);
    };

    return (
        <div className="flex flex-col text-standard-text-color p-5">

            <h1 className={SiteSpecificStyles.standardHeading(host)}>List your business - Categorization </h1>

            <div className="grid md:grid-cols-[auto_1fr] gap-0.5 md:gap-4 pb-2 md:pb-5">

                <div className="standard-field-label">Industry</div>
                <div className="form-right-col mb-3 md:mb-0">

                    <select className="standard-field h-8">
                        <option value="">Select One</option>
                        <option value="">Industry One</option>
                        <option value="">Industry Two</option>
                    </select>

                </div>

                <div className="standard-field-label">Sub Industry</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <select className="standard-field h-8">
                        <option value="">Select One</option>
                        <option value="">Sub Industry One</option>
                        <option value="">Sub Industry Two</option>
                    </select>
                </div>

                <div className="standard-field-label">Business Model</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <select className="standard-field h-8">
                        <option value="">Select One</option>
                        <option value="">Business One</option>
                        <option value="">Business Two</option>
                    </select>
                </div>

                <div className="standard-field-label">Business Start Date</div>
                <div className="form-right-col mb-3 md:mb-0 space-x-[10px]">
                    <select className="border-gray-700 border rounded-sm pl-1.5 pt-0.5 pb-0.5 w-[calc(66.6%-7px)] h-8">
                        <option value="">Month</option>
                        <option value="">Business One</option>
                        <option value="">Business Two</option>
                    </select>
                    <select className="border-gray-700 border rounded-sm pl-1.5 pt-0.5 pb-0.5 w-[calc(33.3%-3px)] h-8">
                        <option value="">Year</option>
                        <option value="">Business One</option>
                        <option value="">Business Two</option>
                    </select>
                </div>

                <div className="h-4"></div>
                <div className="flex justify-end max-w-[400px]">
                    <Link href="/signup/basic">
                        <button role="button" className={`standard-button ${SiteSpecificStyles.standardBgColor(host)}`}
                                onClick={handleContinueClick}>Continue
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}
