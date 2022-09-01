import { RegisterInitial } from '~/pages/Home/Member/Register';
import api from './base';

const subPath = 'auth';

const useAuthApi = () => {
  const authApi = api(subPath);

  const POST_REGISTER = async (userDate: typeof RegisterInitial) => {
    try {
      const resp = await authApi.post('register', {
        ...userDate,
      });

      return await resp;
    } catch (error) {
      alert(error);
    }
  };

  return { POST_REGISTER };
};

export default useAuthApi;
