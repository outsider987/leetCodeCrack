import { setTokenStorage } from '~/utils/storage';
import { LoginInitial } from '~/pages/Home/Member';
import { RegisterInitial } from '~/pages/Home/Member/Register';
import api, { APIResponse, privateApi } from './base';
import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

export const PostDatasType = {
  id: '60d21b4667d0d8992e610c85',
  image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
  likes: 43,
  tags: ['animal', 'dog', 'golden retriever'],
  text: 'adult Labrador retriever',
  publishDate: '2020-05-24T14:53:17.598Z',
  owner: {
    id: '60d0fe4f5311236168a109ca',
    title: 'ms',
    firstName: 'Sara',
    lastName: 'Andersen',
    picture: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
};

const subPath = 'post';
const usePostsApi = () => {
  const postApi = api(subPath);

  const GET_POSTS = (page?: number) => {
    const Posts = useInfiniteQuery(
      subPath,
      async ({ pageParam = 1 }) => {
        const resp = await postApi.get<APIResponse<typeof PostDatasType>>('https://dummyapi.io/data/v1/post?limit=10', {
          headers: {
            'Content-Type': 'application/json',
            'app-id': '637e288874c675dfd68d88e1',
          },
          params: { page: pageParam },
        });
        return resp.data.data;
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;

          return nextPage;
        },
      },
    );

    return Posts;
  };

  return { GET_POSTS };
};

export default usePostsApi;
