import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Wrapper from './Home/Wrapper';



const Page404 = () => {
  
  const contentContainer =
    location.pathname === '/tags'
      ? 'content_tags_container'
      : 'content_container';
  return (
    <Wrapper>
      <div>404</div>
    </Wrapper>
  );
};
export default Page404;
