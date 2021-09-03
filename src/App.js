import { Navigation, LeftSidebar, Content, RightSidebar } from './components';

import './App.scss';

export const App = () => {
  return (
    <>
      <Navigation />

      <main className="main-container">
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
};
