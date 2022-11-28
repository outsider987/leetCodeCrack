import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import usePostsApi from '~/api/post';
import SvgICon from '~/components/SvgIcon';
import HomeWrapper from '~/layouts/HomeWrapper';

const Performance = () => {
  const isShow = useLocation().pathname === '/performance';
  return <>{isShow ? <div>test</div> : <Outlet />}</>;
};
export default Performance;
