import Image from "next/image";
import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex text-standard-text-color p-5">
        <div className="flex flex-col items-end mr-6 w-1/2">
            <div className="w-2/3 mb-6">
                Text describing the the signup, approval, qualification, and listing process.  This text will reference the chart on the right.  xText describing the the signup, approval, qualification, and listing process.
                This text will reference the chart on the right.  Text describing the the signup, approval, qualification, and listing process.  This text will reference the chart on the right.  Text describing the the signup, approval, qualification, and listing process.  This text will reference the chart on the right.
            </div>

            <Link href="/signup/basic">
                <button role="button" className="standard-button">Get Started</button>
            </Link>
        </div>
        <div className="w-1/2 bg-gray-300"></div>
      </div>
  );
}
