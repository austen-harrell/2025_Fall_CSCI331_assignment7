'use client'

import React, { useState } from 'react';

export default function Counter(props: { countBy: number }) {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        const newCount = count + props.countBy;
        if (newCount > 10) {
            setCount(0);
        } else {
            setCount(newCount);
        }
    }

    return (
        <div className="text-black">
            <p className="text-xl font-semibold mb-4">Count: {count}</p>
            <button
                onClick={handleIncrement}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
                +{props.countBy}
            </button>
        </div>
    );
}