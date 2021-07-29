import React from 'react';
import { useLocation } from 'react-router-dom';

import TopNavigation from './topnavigation';
import OFFICE from './sidenavigation/office';

const style = {
  container: `flex flex-col h-screen pl-0 w-full lg:space-y-4 z-10 bg-white`,
  main: `h-screen overflow-auto pb-52 pt-4 px-2 md:pb-20 md:px-4 lg:px-6`,
};

function Main({ children }) {
  const { pathname } = useLocation();

  if (pathname === OFFICE) {
    return null;
  }

  return (
    <div className={style.container}>
      <TopNavigation />
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default React.memo(Main);
