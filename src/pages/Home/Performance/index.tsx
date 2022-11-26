import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import usePostsApi from '~/api/post';
import SvgICon from '~/components/SvgIcon';
import HomeWrapper from '~/layouts/HomeWrapper';

const Performance = () => {
  const page = useRef(1);
  const { GET_POSTS } = usePostsApi();
  const { data, isSuccess, isFetchingNextPage, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage } =
    GET_POSTS(1);
  const observerElem = useRef<any>(null);

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    const element = observerElem.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  const len = data?.pages.length;

  return (
    <div>
      {isSuccess &&
        data.pages.flat().map((post) => (
          <div className="result" key={post?.id}>
            <img src={post?.image} />
          </div>
        ))}
      <div className=" flex text-white " ref={observerElem}>
        <SvgICon className="w-5" name="spin" />
        {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
      </div>
    </div>
  );
};
export default Performance;
