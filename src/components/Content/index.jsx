import React, { useEffect, useState } from 'react';
import { ArticleSkeleton } from '..';

import { ArticleComponent } from '../ArticleComponent';

export const Content = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchAgain = () => {
      if (articles != null) {
        fetch('https://dev.to/api/articles')
          .then((res) => res.json())
          .then((result) => {
            setIsloading(false);
            setArticles([...articles, ...result]);
          })
          .catch((err) => {
            console.log(err);
            throw new Error(
              'Cannot Fetch the data, please check your internet connection!'
            );
          });
      }
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowHeight =
        'innerHeight' in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log('we reached the bottom');
        fetchAgain();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [articles]);

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
        <select id="dropdown-select" className="dropdown">
          <option value="Feed" defaultValue>
            Feed
          </option>

          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Feed</option>
          <option value="Infinity">Infinity</option>
        </select>
      </header>

      <div className="article">
        {isLoading
          ? [1, 2, 3, 4, 5].map((a) => <ArticleSkeleton key={a} />)
          : articles?.map((article, index) => {
              return <ArticleComponent key={index} {...article} />;
            })}
      </div>
    </main>
  );
};
