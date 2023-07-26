import React, { useState } from "react";
import articles from "@/articles/articles.json";
import ArticleCard from "./ArticleCard";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex w-[100vw] justify-around">
      <button onClick={goToPrevious}>-</button>
      <ArticleCard article={articles[currentIndex - 1]} />
      <ArticleCard article={articles[currentIndex]} />
      <ArticleCard article={articles[currentIndex + 1]} />
      <button onClick={goToNext}>+</button>
    </div>
  );
};

export default Carousel;
