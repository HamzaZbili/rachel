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
        className={`object-contain h-[20rem] sm:h-[24rem] lg:h-[30rem] flex items-center `}
      >
        <div className="h-min relative">
          <img
            src={article.image}
            alt={article.title}
            className={`grayscale transition-all duration-300 ${
              isActive && "grayscale-0 sm:scale-[1.3]"
            }`}
          />
          <div
            className={`md:shadow
            absolute top-0 left-0 h-[100%] w-[100%] flex flex-col
            text-[16px] xs:text-sm sm:text-md lg:text-[15px] 
            transition duration-300 items-center text-center
            justify-center p-2
          ${
            isActive
              ? "sm:scale-[1.3] sm:bg-white sm:bg-opacity-50 md:bg-transparent text-black md:text-transparent"
              : "text-transparent"
          }
          hover:text-black hover:bg-white hover:bg-opacity-40 `}
          >
            <p className="mx-10 xs:mx-0">
              <span className={`p-[3px] rounded-lg inline-block ${isActive &&  "bg-teal sm:bg-transparent"}`}>
                {article.title}
              </span>
              <br />
              <br />
              <span className={`mt-1 font-bold p-[2px] rounded-lg inline-block  ${isActive &&  "bg-teal sm:bg-transparent"}`}>
                {article.publisher}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
