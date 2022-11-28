import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import usePostsApi from '~/api/post';
import Carousel from '~/components/Carousel';

import HomeWrapper from '~/layouts/HomeWrapper';

const ReactQuery = () => {
  const images = [
    'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    'https://previews.agefotostock.com/previewimage/medibigoff/7180821159c21ff4602393b1d5dc30a8/oth-233-58225.jpg',
  ];
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};
export default ReactQuery;
