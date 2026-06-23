import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹ {product.price}</p>

      <p>⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;