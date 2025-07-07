import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByBarcode } from "../services/api";

const ProductDetail = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await getProductByBarcode(barcode);
        setProduct(res.data.product);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };
    fetchDetails();
  }, [barcode]);

  if (!product) {
    return (
      <div className="text-center mt-12 text-gray-600 text-lg font-medium">
        Loading product details...
      </div>
    );
  }

  const {
    image_front_url,
    product_name,
    ingredients_text,
    nutrition_grades,
    nutriments,
    labels,
  } = product;

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-fixed text-gray-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
      <div className="bg-white/80 backdrop-blur-md max-w-6xl mx-auto rounded-3xl shadow-xl px-6 py-10">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Product Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={image_front_url}
              alt={product_name}
              className="rounded-2xl w-64 h-64 object-contain shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-3">
            <h1 className="text-4xl font-bold text-green-800">{product_name}</h1>

            <p className="text-base">
              <span className="font-semibold">Ingredients:</span>{" "}
              {ingredients_text || "Not available"}
            </p>

            <p>
              <span className="font-semibold">Nutrition Grade:</span>{" "}
              <span className="uppercase">{nutrition_grades || "N/A"}</span>
            </p>

            {/* Nutritional Details */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-medium">Energy:</span>{" "}
                {nutriments?.energy} {nutriments?.energy_unit || ""}
              </p>
              <p>
                <span className="font-medium">Fat:</span> {nutriments?.fat} g
              </p>
              <p>
                <span className="font-medium">Carbohydrates:</span>{" "}
                {nutriments?.carbohydrates} g
              </p>
              <p>
                <span className="font-medium">Proteins:</span>{" "}
                {nutriments?.proteins} g
              </p>
              <p>
                <span className="font-medium">Labels:</span>{" "}
                {labels || "None"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
