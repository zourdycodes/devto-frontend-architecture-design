import { Navigation, LeftSidebar, Content, RightSidebar } from './components';

import './App.scss';
import { useState } from 'react';

export const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleShowLeftBar = () => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  };

  return (
    <>
      <Navigation openMenu={toggleShowLeftBar} />

      <main className="main-container">
        <LeftSidebar
          burgerMenu={toggleMenu}
          closeBurgerMenu={toggleShowLeftBar}
        />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
};
