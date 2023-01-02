import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { APIResponse, publicApi } from '~/api/base';
import useRandPostsApi from '~/api/randPost';

export const useRandPostsDatas = (page?: number) => {
  const { GET_POSTS } = useRandPostsApi();
  const Posts = useInfiniteQuery('post', GET_POSTS, {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
  });

  return Posts;
};
