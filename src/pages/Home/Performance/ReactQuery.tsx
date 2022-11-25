import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import usePostsApi from '~/api/post';

import HomeWrapper from '~/layouts/HomeWrapper';

const ReactQuery = () => {
  const [page, setPage] = useState(1);
  const { GET_POSTS } = usePostsApi();
  const Posts = GET_POSTS(0);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  return <div></div>;
};
export default ReactQuery;
