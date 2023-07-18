import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import HomeWrapper from '~/layouts/HomeWrapper';
import NavBar from '../../layouts/NavBar';

const Home = () => {
  const { pathname } = useLocation();
  let contentContainer = '';
  contentContainer = pathname === '/canvas/image-editor' ? 'content_editor_container' : 'content_container';
  contentContainer = pathname === '/profile' ? 'content_profile' : 'content_container';
  return (
    <HomeWrapper>
      <NavBar></NavBar>
      <div className={contentContainer}>
        {useLocation().pathname !== '/' ? <Outlet /> : <Navigate to={'/profile'} />}
      </div>
    </HomeWrapper>
  );
};
export default Home;
