import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const DebounceSearchDemo = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState<string[]>([]);

    const debouncedValue = useDebounce(input, 500);

    useEffect(() => {
        console.log("Debounced:", debouncedValue);
       if (!debouncedValue.trim()) {
            console.log("Searching for:", debouncedValue);
            setResults([]);
            return;
        }

        const fakeResults = Array.from({ length: 3 }, (_, i) => {
            return `Result for "${debouncedValue}": Item ${i + 1}`;
        });
        console.log("Searching for:", debouncedValue);

        setResults(fakeResults);
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
            <p>Debounced Value (after 500ms): {debouncedValue}</p>
            <p>Simulated Search Results:</p>
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};