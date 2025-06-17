import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition"
    >
      <svg
        className="w-5 h-5 text-gray-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
        placeholder="Search for food products..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
