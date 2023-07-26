import React from 'react'
import articles from "../../articles/articles.json"
import { openInNewTab } from '@/utils/openNewTab'

const FeatureArticles = () => {

  const feature1 = 15
  const feature2 = 8

  return (
    <>
    {/* left feature */}
      <div className="mt-[50px] flex feature-articles">
        <div className="w-[55vw] flex">
          <h4
            className="p-[60px] w-[20vw]"
          >
            {articles[feature1].title}
            <br />
            <br />
            <i>{articles[feature1].publisher}</i>
          </h4>
          <a
            onClick={() => openInNewTab(articles[feature1].link)}
            className="hover:grayscale-0 w-[30vw]
          grayscale transition duration-300 cursor-pointer"
          >
            <img
              src={articles[feature1].image}
              alt={articles[feature1].title}
            />
          </a>
        </div>
        {/* right feature */}
        <div className="w-[45vw] flex flex-col">
          <a
            onClick={() => openInNewTab(articles[feature2].link)}
            className="hover:grayscale-0 h-[400px] w-[30vw] cursor-pointer
          grayscale transition duration-300 overflow-hidden mt-[20px]"
          >
            <img
              src={articles[feature2].image}
              alt={articles[feature2].title}
              className="object-cover w-[30vw] fixed bottom-[-60px]"
            />
          </a>
          <h3
            className="p-[30px] w-[20vw]"
          >
            {articles[feature2].title}
            <br />
            <br />
            <i>{articles[feature2].publisher}</i>
          </h3>
        </div>
      </div>
    </>
  );
}

export default FeatureArticles