import React from 'react';
import { FaDev } from 'react-icons/fa';
import { BiMessageRoundedCheck } from 'react-icons/bi';
import { RiNotificationLine } from 'react-icons/ri';

export const Navigation = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <a href="https://dev.to" className="headerContainer__logo">
          <FaDev size="3.125rem" />
        </a>

        <div className="headerContainer__searchBox">
          <form>
            <input type="text" aria-label="search" placeholder="Search..." />
          </form>
        </div>

        <div className="headerContainer__right">
          <button>Write a post</button>
          <i>
            <BiMessageRoundedCheck />
          </i>

          <i>
            <RiNotificationLine />
          </i>

          <span>
            <img src="https://picsum.photos/200" alt="profile logo" />
          </span>
        </div>
      </div>
    </header>
  );
};
