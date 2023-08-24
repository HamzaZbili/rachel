import React from "react";

type ArticleCardProps = {
  article: Article;
  isActive: boolean;
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

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={() => openInNewTab(article.link)}
      className={`relative cursor-pointer bg-transparent flex bg-teal 
       first-letter transition-all duration-300 h-auto items-center 
 
      `}
    >
      <div
        className={`object-contain h-[19rem] sm:h-[22rem] lg:h-[30rem] flex items-center `}
      >
        <div className="h-min relative">
          <img
            src={article.image}
            alt={article.title}
            className={`grayscale transition-all duration-300 ${
              isActive && "grayscale-0 scale-[1.3]"
            }`}
          />
          <div
            className={`
             
            absolute top-0 left-0 h-[100%] w-[100%] flex flex-col
            text-[11px] lg:text-[15px] 
            transition duration-300 items-center text-center
          justify-center p-2
          ${
            isActive
              ? "scale-[1.3] bg-white bg-opacity-50 sm:bg-transparent text-black sm:text-transparent"
              : "text-transparent"
          }
          hover:text-black hover:bg-white hover:bg-opacity-50 `}
          >
            {article.title}
            <br />
            <span className="mt-1 font-bold">{article.publisher}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
