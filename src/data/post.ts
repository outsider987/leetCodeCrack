import { useQuery } from 'react-query';
import usePostsApi from '~/api/post';

export const usePostDatas = (searchText: string) => {
  const { GET_POSTS } = usePostsApi();
  const Posts = useQuery([searchText], GET_POSTS);
  return Posts;
};
