import React, { useEffect, useState } from 'react';

import { ArticleComponent } from '../ArticleComponent';

export const Content = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles');

        if (!response.ok && response.status >= 400) {
          throw new Error(
            'Please check your connection or contact the IT support for further guidance'
          );
        }

        const data = await response.json();

        setArticles(data);
        setIsloading(false);
        console.log(data);
      } catch (error) {
        setIsloading(false);
        throw new Error(error);
      }
    };

    const debounceCallback = setTimeout(() => {
      fetchArticles();
    }, 2000);

    return () => clearTimeout(debounceCallback);
  }, []);

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="/#">Feed</a>
          <a href="/#">Week</a>
          <a href="/#">Month</a>
          <a href="/#">Infinity</a>
          <a href="/#">Latest</a>
        </nav>
      </header>

      <div className="article">
        {articles?.map((article, index) => {
          return <ArticleComponent key={index} {...article} />;
        })}
      </div>
    </main>
  );
};
