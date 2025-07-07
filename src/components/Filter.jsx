import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

const Filter = ({ onFilter }) => {
  const [options, setOptions] = useState([]);
  
  const featuredOptions = [
    { label: "Top Rated", value: "snacks" },
    { label: "Popular", value: "beverages" },
    { label: "Low Calories", value: "plant-based-foods" },
  ];

  useEffect(() => {
    const loadCategoryList = async () => {
      try {
        const response = await getCategories();
        const tags = response.data.tags
          ?.map(tag => tag.name)
          .filter(name => name)
          .slice(0, 30);

        setOptions(tags || []);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    loadCategoryList();
  }, []);

  return (
    <div className="w-full max-w-sm">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-green-500"
      >
        <option value="">All Categories</option>

        {/* Featured Filters */}
        {featuredOptions.map(({ label, value }, i) => (
          <option key={`featured-${i}`} value={value}>
            {label}
          </option>
        ))}

        {/* Fetched Categories */}
        {options.map((name, i) => (
          <option key={`cat-${i}`} value={name}>
            {name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
