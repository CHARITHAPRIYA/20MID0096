import React, { useState, useEffect } from 'react';
function products() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductById(productId);
      setProduct(data);
    };
    fetchData();
  }, [productId]);

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
        </div>
      )}
    </div>
  );
}