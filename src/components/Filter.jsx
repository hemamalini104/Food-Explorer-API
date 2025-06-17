import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

const Filter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);

  // Custom filter options mapped to real API categories
  const customOptions = [
    { label: "Top Rated", value: "snacks" },
    { label: "Popular", value: "beverages" },
    { label: "Low Calories", value: "plant-based-foods" },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        const fetched = res.data.tags
          .map(tag => tag.name)
          .filter(Boolean)
          .slice(0, 30);

        setCategories(fetched);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full max-w-xs">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="">All Categories</option>

        {/* Custom Options */}
        {customOptions.map((opt, idx) => (
          <option key={`custom-${idx}`} value={opt.value}>
            {opt.label}
          </option>
        ))}

        {/* Dynamic Category Options */}
        {categories.map((cat, idx) => (
          <option key={`cat-${idx}`} value={cat}>
            {cat.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
