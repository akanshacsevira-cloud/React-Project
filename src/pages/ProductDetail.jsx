import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/api";

function ProductDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="detail">
      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h1>{product.title}</h1>

      <h2>₹ {product.price}</h2>

      <p>⭐ {product.rating}</p>

      <p>{product.description}</p>

      <p>Brand: {product.brand}</p>

      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetail;