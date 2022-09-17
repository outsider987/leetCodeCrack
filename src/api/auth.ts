import { setTokenStorage } from '~/utils/storage';
import { LoginInitial } from '~/pages/Home/Member';
import { RegisterInitial } from '~/pages/Home/Member/Register';

import api, { APIResponse, privateApi } from './base';
import { store } from '~/store';

const subPath = 'auth';
// AxiosResponse<APIResponse<any>, any>
const useAuthApi = () => {
  const authApi = api(subPath);
  const privateAuthApi = privateApi(subPath);

  const POST_REGISTER = async (userDate: typeof RegisterInitial) => {
    const resp = await authApi.post<APIResponse>('register', {
      ...userDate,
    });
    if(resp.data.data)
        setTokenStorage(resp.data.data);

        
    return resp;
  };

  const POST_LOGIN = async (userDate: typeof LoginInitial) => {
    const resp = await authApi.post<APIResponse>('login', {
      ...userDate,
    });
    if(resp.data.data)
    {
        setTokenStorage(resp.data.data);
    }
      

    
    return resp;
  };

  const GET_REFRESH = async () => {
    const resp = await privateAuthApi.get<
      APIResponse<{ accessToken: string; refreshToken: string }>
    >('refresh', {
      withCredentials: true,
    });

    return resp;
  };

  return { POST_REGISTER, GET_REFRESH ,POST_LOGIN};
};

export default useAuthApi;
