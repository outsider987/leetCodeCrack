import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Wrapper from './Wrapper';


const Home = () => {
  
  const contentContainer =
    location.pathname === '/tags'
      ? 'content_tags_container'
      : 'content_container';
  return (
    <Wrapper>
      <NavBar></NavBar>
      <div className={contentContainer}>
        {location.pathname !== '/' ? <Outlet /> : <Navigate to={'/sort'} />}
        {/* <Outlet /> */}
      </div>
    </Wrapper>
  );
};
export default Home;
