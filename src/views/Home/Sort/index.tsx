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
  console.log('123');
  return (
    <>
      {isShow ? (
        <div className="flex h-[80vh]">
          {HomeRoute.children
            .find((item) => item.path === '/sort')
            ?.children?.map((item2) => (
              <Link
                className="text-white hover:text- text-2xl rounded-2xl shadow-xl flex justify-center items-center font-bold tracking-wide w-1/2 h-1/2 bg-navbar"
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

// async function sleep(ms: number) {
//   return new Promise((r) => setTimeout(r, ms));
// }
// function getRandomNoDuplicateArray(maxValue: number): number[] {
//   let result: any = [];
//   while (result.length < maxValue) {
//     const randomValu = Math.floor(Math.random() * maxValue) + 1;
//     if (result.indexOf(randomValu) === -1) result.push(randomValu);
//   }
//   return result;
// }
