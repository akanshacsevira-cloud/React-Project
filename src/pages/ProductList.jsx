import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../services/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

const itemsPerPage = 9;

const totalPages = Math.ceil(
  filtered.length / itemsPerPage
);

const start = (page - 1) * itemsPerPage;

const currentProducts = filtered.slice(
  start,
  start + itemsPerPage
);

  useEffect(() => {
    async function fetchData() {
      try {
        const productRes = await getProducts();
        const categoryRes = await getCategories();

        setProducts(productRes.data.products);
        setFiltered(productRes.data.products);
        setCategories(categoryRes.data);
      } catch {
        alert("Error loading data");
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  const brands = [...new Set(products.map((p) => p.brand))];

  const handleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((b) => b !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  useEffect(() => {
  let data = [...products];

  if (category) {
    data = data.filter(
      (item) => item.category === category
    );
  }

  if (minPrice) {
    data = data.filter(
      (item) => item.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    data = data.filter(
      (item) => item.price <= Number(maxPrice)
    );
  }

  if (selectedBrands.length > 0) {
    data = data.filter((item) =>
      selectedBrands.includes(item.brand)
    );
  }

  setFiltered(data);
  setPage(1); // reset page
}, [category, minPrice, maxPrice, selectedBrands]);

  if (loading) return <h2>Loading...</h2>;
return (
  <div className="container">
    <Filters
      categories={categories}
      category={category}
      setCategory={setCategory}
      minPrice={minPrice}
      maxPrice={maxPrice}
      setMinPrice={setMinPrice}
      setMaxPrice={setMaxPrice}
      brands={brands}
      selectedBrands={selectedBrands}
      handleBrand={handleBrand}
    />

    <div className="grid-section">

      <div className="grid">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

    </div>
  </div>
);
}

export default ProductList;
