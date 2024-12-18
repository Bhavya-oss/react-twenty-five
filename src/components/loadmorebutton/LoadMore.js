import React, { useEffect, useState } from "react";
import "./LoadMore.css";

function LoadMore() {
  const [isLoading, setIsLoading] = useState(false);
  const [isProducts, setIsProducts] = useState([]);
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0); // Initialize count at 0

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();

      if (result.products.length > 0) {
        setIsProducts((prev) => [...prev, ...result.products]);
        // Disable button when all products are loaded
        if (
          result.products.length < 20 ||
          isProducts.length + result.products.length >= 100
        ) {
          setIsDisabled(true);
        }
      }
      setIsLoading(false);
    } catch (e) {
      setIsErrorMessage(e.message || "An error occurred");
      setIsLoading(false);
    }
  };

  // Initial fetch (only runs once on mount)
  useEffect(() => {
    fetchData();
  }, []);

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setCount((prev) => prev + 1); // Increment count
  };

  // Trigger fetch when `count` changes
  useEffect(() => {
    if (count > 0) {
      fetchData();
    }
  }, [count]);

  // Show loading message only if no data is loaded yet
  if (isLoading && isProducts.length === 0) {
    return <div>Data is loading, please wait...</div>;
  }

  // Show error message if fetch fails
  if (isErrorMessage) {
    return <div>Error occurred: {isErrorMessage}</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {isProducts.map((product) => (
          <div className="product" key={product.id}>
            <div>
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <div className="load-more">
        <button disabled={isDisabled || isLoading} onClick={handleLoadMore}>
          {isDisabled
            ? "No more products"
            : isLoading
            ? "Loading..."
            : "Load More"}
        </button>
      </div>
      {isDisabled && (
        <div>
          <h5>You have reached the limit</h5>
        </div>
      )}
    </div>
  );
}

export default LoadMore;
