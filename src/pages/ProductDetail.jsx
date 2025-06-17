import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByBarcode } from "../services/api";

const ProductDetail = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getProductByBarcode(barcode);
      setProduct(res.data.product);
    };
    fetchDetails();
  }, [barcode]);

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-800 p-6"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <div className="backdrop-blur-md bg-white/70 max-w-4xl mx-auto rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={product.image_front_url}
            alt={product.product_name}
            className="w-64 h-64 object-contain rounded-xl shadow"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-green-800 mb-2">{product.product_name}</h2>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-semibold">Ingredients:</span> {product.ingredients_text || "Not available"}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Nutrition Grade:</span>{" "}
              <span className="uppercase">{product.nutrition_grades || "N/A"}</span>
            </p>

            <div className="mt-4 space-y-1 text-gray-700">
              <p><span className="font-semibold">Energy:</span> {product.nutriments?.energy} {product.nutriments?.energy_unit}</p>
              <p><span className="font-semibold">Fat:</span> {product.nutriments?.fat} g</p>
              <p><span className="font-semibold">Carbohydrates:</span> {product.nutriments?.carbohydrates} g</p>
              <p><span className="font-semibold">Proteins:</span> {product.nutriments?.proteins} g</p>
              <p><span className="font-semibold">Labels:</span> {product.labels || "None"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
