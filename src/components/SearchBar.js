import React, { useState, useEffect, useRef } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchBarRef = useRef(null);

  const searchData = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value === "") {
      setResults([]);
    } else {
      const filteredResults = searchData.filter((item) =>
        item.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <div ref={searchBarRef} className="relative w-3/4 cursor-pointer custom-sm:hidden"> 
      <div id="Box4" className="bg-[#edeef2] flex flex-row justify-between w-full h-10 font-['Nunito'] items-start pt-2 px-3 rounded-lg">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search"
          className="w-full bg-transparent text-sm tracking-[0.1] leading-[20px] text-[#83859c] focus:outline-none focus:border-blue-500"
        />
        <img src="https://file.rendit.io/n/6ZMPbfgE9j0OjlVdHyAU.svg" alt="IconOutlinedActionMainSearch" className="w-4" />
      </div>
      {results.length > 0 && (
        <div className="absolute bg-white w-full mt-1 rounded-lg shadow-lg">
          {results.map((result, index) => (
            <div key={index} className="p-2 hover:bg-gray-100">
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
