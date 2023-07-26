import React from 'react'
import { openInNewTab } from "@/utils/openNewTab";

type Article = {
  title: string;
  date: string;
  city: string;
  link: string;
  image: string;
  publisher: string;
};

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article}: ArticleCardProps) => {
        return (
          <div
            onClick={() => openInNewTab(article.link)}
            className="m-5 w-[25vw] flex sm:p-10
            flex-col"
          >
              <img
                src={article.image}
                alt={article.title}
                className="hover:grayscale-0
          grayscale transition duration-300 max-w-[60vw]"
              />
              <h2>{article.title}</h2>
              <i>{article.publisher}</i>
            </div>
        );
}
export default ArticleCard