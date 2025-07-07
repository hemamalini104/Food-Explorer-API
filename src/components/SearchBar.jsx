import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 bg-gradient-to-r from-white to-green-50 border border-green-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Find food like 'Pizza', 'Pasta'..."
        className="flex-grow bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm"
      />

      <button
        type="submit"
        className="bg-green-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-green-600 transition"
      >
        🔍 Search
      </button>
    </form>
  );
};

export default SearchBar;

