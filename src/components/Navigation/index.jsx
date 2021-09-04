import React, { useState } from 'react';
import { FaDev } from 'react-icons/fa';
import { BiMessageRoundedCheck } from 'react-icons/bi';
import { RiNotificationLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

export const Navigation = ({ openMenu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={openMenu}
        ></div>
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
          <i className="hidden-search">
            <FiSearch />
          </i>

          <i>
            <BiMessageRoundedCheck />
          </i>

          <i>
            <RiNotificationLine />
          </i>

          <span onClick={toggleMenu}>
            <img src="https://picsum.photos/200" alt="profile logo" />
          </span>
        </div>
      </div>

      <div className={`${showMenu ? 'dropdown-menu' : 'dropdown-menu-close'}`}>
        <ul>
          <li onClick={toggleMenu}>
            <a href="/profile">
              <div className="u-n">ZourdyZou</div>
              <small className="u-name-id">@zourdyrusty</small>
            </a>
          </li>

          <li onClick={toggleMenu}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/post">Writing a Post</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/list">Reading List</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/settings">Settings</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/signout">Sign Out</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
