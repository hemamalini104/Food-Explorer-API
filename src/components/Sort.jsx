const Sort = ({ onSort }) => {
  return (
    <div className="max-w-sm w-full mx-auto">
      <div className="relative">
        <select
          id="sortSelect"
          onChange={(e) => onSort(e.target.value)}
          className="appearance-none w-full px-4 py-2 pr-10 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        >
          <option value="">Sort options</option>
          <option value="az">Name: A to Z</option>
          <option value="za">Name: Z to A</option>
          <option value="nutrition-asc">Nutrition ↑</option>
          <option value="nutrition-desc">Nutrition ↓</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
          ▼
        </div>
      </div>
    </div>
  );
};

export default Sort;
