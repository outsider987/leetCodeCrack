import { APIResponse, publicApi } from './base';

export const PostDatasType = {
  id: '60d21b4667d0d8992e610c85',
  createdAt: '2023-01-02T00:00:00.000Z',
  title: 'pellentesque volutpat dui maecenas',
  published: false,
  author_id: 2,
  body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
};

const subPath = 'post';
const usePostsApi = () => {
  const configApi = publicApi(subPath, false);

  const GET_POSTS = async (dto) => {
    const resp = await configApi.get<APIResponse<typeof PostDatasType[]>>('', {
      params: { searchText: dto.queryKey[0] },
    });
    return resp.data.data;
  };

  return { GET_POSTS };
};

export default usePostsApi;
