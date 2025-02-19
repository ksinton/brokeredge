'use client'

import React, {useRef} from 'react';

export default function Counter() {

    // const [counter, setCounter] = React.useState(0);
    const handleUpClick = () => {

    }

    const inputFieldRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex text-gray-700">
            <button role="button" onClick={handleUpClick} className="bg-gray-300 border-[1px] border-solid px-6 py-1 rounded-lg text-sm disabled">
                API Call
            </button>
        </div>
    );
}
