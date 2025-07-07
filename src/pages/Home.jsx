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
    const fetchData = async () => {
      try {
        const response = category
          ? await getProductsByCategory(category)
          : await searchProductsByName(query);
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [query, category]);

  const sorted = [...products].sort((a, b) => {
    if (sort === "az") return a.product_name.localeCompare(b.product_name);
    if (sort === "za") return b.product_name.localeCompare(a.product_name);
    if (sort === "nutrition-asc") return (a.nutrition_grades || "").localeCompare(b.nutrition_grades || "");
    if (sort === "nutrition-desc") return (b.nutrition_grades || "").localeCompare(a.nutrition_grades || "");
    return 0;
  });

  return (
    <div
      className="min-h-screen bg-cover bg-fixed text-gray-900"
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20250104/original/pngtree-fast-food-doodle-pattern-in-orange-line-art-picture-image_16133277.jpg')`,
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm min-h-screen">
        {/* Top Banner */}
        <header className="py-14 bg-gradient-to-r from-green-100 via-orange-50 to-yellow-100 shadow">
          <div className="text-center px-6">
            <h1 className="text-5xl font-extrabold text-orange-600 drop-shadow-sm">🍕 Food Explorer 🍔</h1>
            <p className="text-lg font-medium text-gray-700 mt-2">Discover your favorite foods with nutrition info!</p>
          </div>
        </header>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 mt-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            <SearchBar onSearch={setQuery} />
            <Filter onFilter={setCategory} />
            <Sort onSort={setSort} />
          </div>
        </div>

        {/* Product Display */}
        <section className="max-w-7xl mx-auto px-4 mt-12 pb-24">
          {sorted.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {sorted.map((product) => (
                <div
                  key={product.code}
                  className="rounded-xl bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl text-gray-500 mt-16">No products found. Try another search.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
