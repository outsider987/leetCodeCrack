import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import HomeWrapper from '~/layouts/HomeWrapper';

const Canvas = () => {
  const isShow = useLocation().pathname === '/canvas';
  return <>{isShow ? <div>test</div> : <Outlet />}</>;
};
export default Canvas;
