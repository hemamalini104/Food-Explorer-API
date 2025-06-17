const Sort = ({ onSort }) => {
  return (
    <div className="w-full max-w-xs">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="">Sort By</option>
        <option value="az">Product Name A-Z</option>
        <option value="za">Product Name Z-A</option>
        <option value="nutrition-asc">Nutrition Grade ↑</option>
        <option value="nutrition-desc">Nutrition Grade ↓</option>
      </select>
    </div>
  );
};

export default Sort;
