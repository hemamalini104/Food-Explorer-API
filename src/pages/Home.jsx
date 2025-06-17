import { useEffect, useState } from "react";
import { searchProductsByName, getProductsByCategory } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res;
      if (category) {
        res = await getProductsByCategory(category);
        setProducts(res.data.products);
      } else {
        res = await searchProductsByName(query);
        setProducts(res.data.products);
      }
    };
    fetchProducts();
  }, [query, category]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "az") return a.product_name.localeCompare(b.product_name);
    if (sort === "za") return b.product_name.localeCompare(a.product_name);
    if (sort === "nutrition-asc") return (a.nutrition_grades || "").localeCompare(b.nutrition_grades || "");
    if (sort === "nutrition-desc") return (b.nutrition_grades || "").localeCompare(a.nutrition_grades || "");
    return 0;
  });

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-no-repeat text-gray-800"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/doodle-food-icons-seamless-background_3248-3676.jpg")',
      }}
    >
      {/* Overlay to reduce brightness for better readability */}
      <div className="bg-white bg-opacity-70 min-h-screen">
        {/* Hero / Header Section */}
        <section className="bg-gradient-to-r from-green-200 via-yellow-100 to-pink-100 py-12 mb-8 shadow-inner">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-sm">
              Explore Food Products
            </h1>
            <p className="mt-2 text-lg text-gray-700 font-medium">
              Discover nutrition facts, ingredients, and more
            </p>
          </div>
        </section>

        {/* Filters */}
        <div className="max-w-6xl mx-auto px-4 md:px-0 mb-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <SearchBar onSearch={setQuery} />
            <Filter onFilter={setCategory} />
            <Sort onSort={setSort} />
          </div>
        </div>

        {/* Products Grid */}
        <main className="max-w-6xl mx-auto px-4 md:px-0 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.code}
                className="p-4 rounded-xl shadow-md hover:shadow-lg transition 
                           bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center text-gray-600 mt-10">
              No products found for this filter or query.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
