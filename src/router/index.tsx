import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const lazyLoad = (
  Comp: React.LazyExoticComponent<React.ComponentType<any>>
) => {
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};

const routes = [
  {
    path: '/',
    element: lazyLoad(React.lazy(() => import('~/views/Home'))),
    icon: 'logo',
    children: [
      {
        path: '/sort',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Sort'))),
        icon: 'template',
        isShow: true,
        text: 'Sort',
      }
    ],
  },
];

const MYRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export { MYRoutes, routes };
