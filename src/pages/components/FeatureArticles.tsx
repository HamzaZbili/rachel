import React from "react";
import articles from "../../articles/articles.json";
import { openInNewTab } from "@/utils/openNewTab";
import ArticleCard from "./myWork/components/ArticleCard";

const FeatureArticles = () => {
  const f1 = 15;
  const f2 = 8;

  return (
    <div className="mt-[50px] flex feature-articles px-10 items-center">
      <div className=" overflow-hidden mx-10">
        <ArticleCard article={articles[f1]} />
      </div>
      <div className="overflow-hidden mx-10">
        <ArticleCard article={articles[f2]} />
      </div>
    </div>
  );
};

export default FeatureArticles;
