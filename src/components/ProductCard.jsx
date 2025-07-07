import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-green-50 border border-green-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between h-full">
      
      {/* Image */}
      <div className="w-full h-44 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
        <img
          src={product.image_front_small_url}
          alt={product.product_name}
          className="object-contain max-h-full"
        />
      </div>

      {/* Name */}
      <h2 className="mt-3 text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
        {product.product_name}
      </h2>

      {/* Info */}
      <div className="text-xs sm:text-sm text-gray-700 mt-2 space-y-1">
        <p><span className="font-medium">Category:</span> {product.categories || "N/A"}</p>
        <p><span className="font-medium">Ingredients:</span> {product.ingredients_text || "Not listed"}</p>
        <p><span className="font-medium">Nutrition Grade:</span> {product.nutrition_grades?.toUpperCase() || "Unrated"}</p>
      </div>

      {/* Link */}
      <div className="mt-3">
        <Link
          to={`/product/${product.code}`}
          className="inline-block text-green-700 hover:text-green-900 text-sm font-medium underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
