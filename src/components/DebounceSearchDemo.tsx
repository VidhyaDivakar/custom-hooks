import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const DebounceSearchDemo = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState<string[]>([]);

    const debouncedValue = useDebounce(input, 500);

    useEffect(() => {
        if (debouncedValue) {
            console.log("Searching for:", debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div style={{ padding: 20 }}>
            <h2>Debounce Search Demo</h2>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type to search..."
            />

            <p>Current Value: {input}</p>
            <p>Debounced Value: {debouncedValue}</p>
        </div>
    );
};