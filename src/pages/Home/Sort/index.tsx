import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HomeRoute } from '~/router';

export interface BoxState {
  sort_index: number;
  value: number;
}

const Sort = () => {
  console.log(useLocation().pathname);
  const isShow = useLocation().pathname === '/sort';
  return (
    <>
      {isShow ? (
        <div className="flex h-full space-x-3  ">
          {HomeRoute.children
            .find((item) => item.path === '/sort')
            ?.children?.map((item2) => (
              <Link
                className="m-auto flex h-1/2 w-1/2 items-center justify-center rounded-2xl bg-navbar text-2xl font-bold tracking-wide text-white shadow-xl"
                to={item2.path}
              >
                {item2.text}
              </Link>
            ))}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
export default Sort;
