import React from "react";
import { openInNewTab } from "@/utils/openNewTab";

type ArticleCardProps = {
  article: Article
  isActive: boolean
};

type Article = {
  title: string;
  date: string;
  city: string;
  link: string;
  image: string;
  publisher: string;
};

const ArticleCard = ({ article, isActive }: ArticleCardProps) => {
  
  return (
    <div
      onClick={() => openInNewTab(article.link)}
      className={`relative cursor-pointer bg-transparent flex bg-teal 
       first-letter transition-all duration-500 h-auto items-center 
 
      `}
    >
      <div
        className={`object-contain h-[17rem] sm:h-[22rem] lg:h-[30rem] flex items-center`}
      >
        <div className="h-min relative">
          <div className="absolute top-0 left-0 hover:bg-blue-300 opacity-50 h-full w-full" />
          <img
            src={article.image}
            alt={article.title}
            className={`grayscale transition-all duration-500 ${
              isActive && "grayscale-0 scale-[1.3]"
            }`}
          />
          <div
            className={`absolute top-0 left-0 h-[100%] w-[100%] flex flex-col
            text-xs sm:text-md lg:text-lg
            transition duration-100
          justify-center text-transparent p-2 
          hover:text-white hover:bg-orange-600 hover:bg-opacity-50 ${
            isActive && "grayscale-0 scale-[1.3]"
          }`}
          >
            {article.title}
            <br />
            <span className="mt-1">{article.publisher}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
