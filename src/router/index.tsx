import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '~/pages/Home';
import Sort from '~/pages/Home/Sort';
import QuickSort from '~/pages/Home/Sort/QuickSort';
import Page404 from '~/pages/Page404';

QuickSort;

const lazyLoad = (
  Comp: React.LazyExoticComponent<React.ComponentType<any>>
) => {
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};
const HomeRoute = {
  path: '/',
  element: lazyLoad(React.lazy(() => import('~/pages/Home'))),
  icon: 'logo',
  children: [
    {
      path: '/profile',
      element: lazyLoad(React.lazy(() => import('~/pages/Home/Profile'))),
      icon: 'template',
      isShow: true,
      text: 'profile',
    },
    {
      path: '/sort',
      element: lazyLoad(React.lazy(() => import('~/pages/Home/Sort'))),
      icon: 'template',
      isShow: true,
      text: 'Sort',
      children: [
        {
          path: '/sort/quicksort',
          element: lazyLoad(
            React.lazy(() => import('~/pages/Home/Sort/QuickSort'))
          ),
          icon: 'template',
          isShow: true,
          text: 'QuickSort',
        },
        {
          path: '/sort/mergesort',
          element: lazyLoad(
            React.lazy(() => import('~/pages/Home/Sort/MergeSort'))
          ),
          icon: 'template',
          isShow: true,
          text: 'MergeSort',
        },
      ],
    },
    {
      path: '/member',
      element: lazyLoad(React.lazy(() => import('~/pages/Home/Member'))),
      icon: 'template',
      isShow: true,
      text: 'member',
    },
  ],
};
const routes = [
  HomeRoute,
  {
    path: '*',
    element: <Page404 />,
    icon: 'logo',
  },
];

const MYRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export { MYRoutes, routes, HomeRoute };
