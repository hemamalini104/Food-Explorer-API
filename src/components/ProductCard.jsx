import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image_front_small_url} alt={product.product_name} className="w-full h-40 object-contain" />
      <h2 className="text-lg font-semibold mt-2">{product.product_name}</h2>
      <p>Category: {product.categories}</p>
      <p>Ingredients: {product.ingredients_text || "N/A"}</p>
      <p>Nutrition Grade: {product.nutrition_grades}</p>
      <Link to={`/product/${product.code}`} className="text-blue-500 underline mt-2 block">View Details</Link>
    </div>
  );
};

export default ProductCard;
