import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { FaRegCircle } from "react-icons/fa6";

function ImageSlider({ url, limit, page }) {
  const [apiData, setApiData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async (geturl) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setApiData(data);
      }
      setIsLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (currentIndex < apiData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  if (isLoading) {
    return <div>Please wait, data is loading...</div>;
  }

  if (errorMessage) {
    return <div>Error occurred: {errorMessage}</div>;
  }

  return (
    <div className="slider-container">
      <button
        className={`nav-button left ${
          currentIndex !== 0 ? "opacity-1" : "opacity-0"
        }`}
        onClick={handlePrev}
      >
        Prev
      </button>
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {apiData.map((image, index) => (
            <div className="slider-item" key={index}>
              <img src={image.download_url} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`nav-button right ${
          currentIndex !== apiData.length - 1 ? "opacity-1" : "opacity-0"
        }`}
        onClick={handleNext}
      >
        Next
      </button>
      <div className="button-dots">
        {Array.from({ length: apiData.length }).map((curr, indx) => (
          <div>
            <FaRegCircle
              onClick={() => setCurrentIndex(indx)}
              style={{ background: indx <= currentIndex ? "white" : "grey" }}
              className="circle-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
