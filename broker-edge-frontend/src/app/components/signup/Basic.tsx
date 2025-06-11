'use client';

import { useRouter } from 'next/navigation';
import React,{ useRef } from 'react';
import {Business, useBusinessStore} from "../../../lib/store";
import SiteSpecificStyles from "../../utils/SiteSpecificStyles";

interface SignupProps {
    host: string;
}

export default function Basic({host}: SignupProps) {

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
            name: nameField.current.value,
            phone: phoneField.current.value,
            email: emailField.current.value,
            password: passwordField.current.value,
        };

        updateBusiness(host, updatedBusiness).then((response) => {
            // @ts-ignore
            if (response && response.success === true) {
                router.push('/signup/categorization');
            } else {
                console.log(response);
                alert("There was an error saving.");
            }

        });

    };

    return (
        <div className="flex flex-col text-standard-text-color p-5">

            <h1 className={SiteSpecificStyles.standardHeading(host)}>List Your Business - Basic Info</h1>

            <div className="grid md:grid-cols-[auto_1fr] gap-0.5 md:gap-4 pb-2 md:pb-5">

                <div className="flex flex-col justify-center pb-0.5 md:pb-0">Legal Business Name</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <input
                        type="text"
                        defaultValue={business.name}
                        className="standard-field"
                        ref={nameField}
                        pattern="[a-zA-Z0-9 _.\-@\(\)+!?&#39;&quot;]+"
                        title="Only letters, numbers, spaces, underscores, periods, hyphens, @, parentheses, +, !, ?, single quotes, and double quotes are allowed."
                        required
                    />
                </div>

                <div className="flex flex-col justify-center">Business Phone Number</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <input
                        type="text"
                        defaultValue={business.phone}
                        className="w-full border-gray-700 border rounded-sm pl-1.5 pt-0.5 pb-0.5"
                        ref={phoneField}
                        pattern="[a-zA-Z0-9 .\-\(\)+]+"
                        title="Only letters, numbers, spaces, periods, hyphens, parentheses, and + are allowed."
                        required
                    />
                </div>

                <div className="flex flex-col justify-center">Business Email</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <input
                        type="text"
                        defaultValue={business.email}
                        className="w-full border-gray-700 border rounded-sm pl-1.5 pt-0.5 pb-0.5"
                        ref={emailField}
                        pattern="[a-zA-Z0-9 _.\-@\(\)+!?&#39;&quot;]+"
                        title="Only letters, numbers, spaces, underscores, periods, hyphens, @, parentheses, +, !, ?, single quotes, and double quotes are allowed."
                        required
                    />
                </div>

                <div className="flex flex-col justify-center">Password</div>
                <div className="form-right-col mb-3 md:mb-0">
                    <input
                        type="password"
                        defaultValue={business.password}
                        className="w-full border-gray-700 border rounded-sm pl-1.5 pt-0.5 pb-0.5"
                        pattern="[a-zA-Z0-9 _.\-@\(\)+!?&#39;&quot;]{10,}"
                        title="Only letters, numbers, spaces, underscores, periods, hyphens, @, parentheses, +, !, ?, single quotes, and double quotes are allowed. Also must be at least 10 chracters."
                        ref={passwordField}
                        required
                    />
                </div>

                <div className="flex flex-col justify-center">Verify Password</div>
                <div className="form-right-col">
                    <input
                        type="password"
                        defaultValue={business.password}
                        className="w-full border-gray-700 border rounded-sm pl-1.5 pt-0.5 pb-0.5"
                        ref={passwordFieldTwo}
                    />
                </div>

                <div className="h-4"></div>
                <div className="flex justify-end max-w-[400px]">
                    <button role="button" className={`standard-button ${SiteSpecificStyles.standardBgColor(host)}`} onClick={handleContinueClick}>Continue</button>
                </div>

            </div>

        </div>
    );
}
