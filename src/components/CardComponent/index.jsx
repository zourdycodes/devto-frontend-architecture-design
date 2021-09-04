/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const CardComponent = ({ tag, articles }) => {
  return (
    <div className="card">
      <header>
        <h3>{tag}</h3>
        {tag === 'Listings' && (
          <a href="#">
            <small>see all</small>
          </a>
        )}
      </header>

      <ul>
        {articles.map((content) => {
          return (
            <li key={content.id}>
              <a href="/#">{content.mainTitle}</a> <br />
              <small>{content.subText}</small>
              {content.newarticle && <span>new</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
