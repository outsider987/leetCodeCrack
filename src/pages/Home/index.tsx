import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import HomeWrapper from '~/layouts/HomeWrapper';
import NavBar from '../../layouts/NavBar';

const Home = () => {
  const contentContainer =
    useLocation().pathname === '/profile'
      ? 'content_tags_container'
      : 'content_container';

  return (
    <HomeWrapper>
      <NavBar></NavBar>
      <div className={contentContainer}>
        {useLocation().pathname !== '/' ? (
          <Outlet />
        ) : (
          <Navigate to={'/profile'} />
        )}
        {/* <Outlet /> */}
      </div>
    </HomeWrapper>
  );
};
export default Home;
