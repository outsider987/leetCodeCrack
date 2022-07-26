import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Wrapper from './Wrapper';

const Home = () => {
  const contentContainer =
    useLocation().pathname === '/profile'
      ? 'content_tags_container'
      : 'content_container';
  console.log(location.pathname);
  return (
    <Wrapper>
      <NavBar></NavBar>
      <div className={contentContainer}>
        {useLocation().pathname !== '/' ? (
          <Outlet />
        ) : (
          <Navigate to={'/profile'} />
        )}
        {/* <Outlet /> */}
      </div>
    </Wrapper>
  );
};
export default Home;
