import { useState } from "react";

const fetchSuggestions = async (query) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );
    const data = await response.json();
    return data.map((item) => item.display_name);
};


const AddressAutocomplete = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 2) {
            const results = await fetchSuggestions(value);
            setSuggestions(results);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full px-3 py-2 border rounded"
            />
            {suggestions.length > 0 && (
                <ul className="absolute w-full bg-white border rounded mt-1">
                    {suggestions.map((address, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                onSelect(address);
                                setQuery(address);
                                setSuggestions([]);
                            }}
                        >
                            {address}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddressAutocomplete;
