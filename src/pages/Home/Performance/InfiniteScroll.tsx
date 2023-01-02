import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useRandPostsApi from '~/api/randPost';
import SvgICon from '~/components/SvgIcon';
import { useRandPostsDatas } from '~/data/randPost';
import HomeWrapper from '~/layouts/HomeWrapper';

const InfiniteScroll = () => {
  const page = useRef(1);
  const {
    data,
    isSuccess,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useRandPostsDatas(1);
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
    (entries: any) => {
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
      <div className="flex text-white" ref={observerElem}>
        <SvgICon name="spin" className="w-5" />
        {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
      </div>
    </div>
  );
};
export default InfiniteScroll;
