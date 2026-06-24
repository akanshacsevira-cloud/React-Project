function Filters({
  categories,
  category,
  setCategory,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  brands,
  selectedBrands,
  handleBrand,
}) {
  return (
    <div className="filters">
      {/* <h3>Category</h3>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>

        {categories.map((cat) => (
          <option key={cat.slug} value={cat.name || cat.slug}>
            {cat.name || cat.slug}
          </option>
        ))}
      </select> */}

      <h3>Price</h3>

      <input
        type="number"
        placeholder="Min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <h3>Brand</h3>

      {brands.map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() => handleBrand(brand)}
          />
          {brand}
        </label>
      ))}
    </div>
  );
}

export default Filters;
