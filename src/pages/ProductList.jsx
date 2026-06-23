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
  }, [
    category,
    minPrice,
    maxPrice,
    selectedBrands,
    products,
  ]);

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

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;