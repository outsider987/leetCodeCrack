import React, { useEffect, useRef, useState } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useAuthApi from '~/api/auth';
import { useForm, ValidateType } from '~/hooks/useMyForm';
import { RegexpBindFactory, validateRegexp } from '~/utils/validate';
import { selectAuth, store } from '~/store';
import { setAlertDialog } from '~/store/global';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenStorage } from '~/utils/storage';
import Account from '~/components/Member/Account';
import ThridPartySSO from '~/components/Member/ThridPartySSO';

export interface MemberState {
  sort_index: number;
  value: number;
}
export const LoginInitial = {
  email: 'test@gmail.com',
  password: 'Asd123!',
};

const Login = () => {
  const authSelector = useSelector(selectAuth);
  const [accessCount, setAccessCountToken] = useState(10);
  const [tokeType, setTokeType] = useState('access');
  const firstRender = useRef(false);
  const intervalId = useRef<any>(0);
  const countTime = useRef(10);
  const tokeTypeRef = useRef('access');
  document.cookie = 'name=value';
  const rules: ValidateType<typeof LoginInitial> = {
    email: [
      { validate: validateRegexp.email, message: 'wrong mail formate' },
      { validate: validateRegexp.require, message: 'need value' },
    ],
    password: [
      { validate: validateRegexp.require, message: 'need value' },
      { validate: validateRegexp.password, message: 'wrong ' },
    ],
  };
  const { validator, handleSubmit } = useForm(LoginInitial, rules);

  const { POST_LOGIN, GET_TokenTest, GET_USER, GET_LOGOUT } = useAuthApi();

  const onSubmit = handleSubmit(async (data) => {
    if (!data) throw 'submit failed';
    const res = await POST_LOGIN(data);
    if (res.data.status) {
      firstRender.current = true;
      countTime.current = 10;
    }
  });

  useEffect(() => {
    clearInterval(intervalId.current);
    tokeTypeRef.current = 'access';
    setTokeType(tokeTypeRef.current);
    countTime.current = 10;
    setAccessCountToken(countTime.current);

    if (authSelector.user.accessToken !== '') {
      intervalId.current =
        countTime.current > 0 &&
        setInterval(() => {
          setAccessCountToken(--countTime.current);
          if (countTime.current === 0 && tokeTypeRef.current === 'access') {
            tokeTypeRef.current = 'refresh';
            setTokeType(tokeTypeRef.current);
            countTime.current = 10;
            setAccessCountToken(10);
            // clearInterval(intervalId.current as any);
          }
          if (countTime.current === 0 && tokeTypeRef.current === 'refresh') {
            clearInterval(intervalId.current as any);
          }
        }, 1000);
    }
  }, [authSelector.user.accessToken]);
  const onTestToken = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    GET_TokenTest().then((res) => {
      store.dispatch(setAlertDialog({ show: true, msg: 'test work', title: 'test' }));
    });
  };
  useEffect(() => {
    const test = async () => {
      const res1 = await GET_USER();

      console.log(res1);
      console.log('123');
    };
    test();
  }, []);

  return (
    <>
      {
        <div className="flex h-full w-full ">
          {authSelector.user.userInformation.username !== '' && (
            <div className="flex flex-col text-white">
              <span>name:{authSelector.user.userInformation.username}</span>
              <button onClick={() => GET_LOGOUT()}>log out </button>
            </div>
          )}

          <form className="m-auto w-[50vw] space-y-6 ">
            <Account validator={validator}></Account>
            <div className="flex font-bold text-orange-400">
              <Link to="/member/register">Register?</Link>
            </div>
            <div className="flex w-full ">
              <Button onClick={onSubmit} className="m-auto">
                Submit
              </Button>
            </div>
            <div className="flex w-full flex-col">
              <Button onClick={onTestToken} className="m-auto">
                TokenTest
              </Button>
              <div className="grid grid-cols-2">
                <span className="max-w-xs break-all text-white">
                  {tokeType === 'refresh'
                    ? `refresh:${authSelector.user.refreshToken}`
                    : `access:${authSelector.user.accessToken}`}
                </span>
                {authSelector.user.accessToken !== '' && (
                  <span className="text-xl font-bold text-white">{`${tokeType} expired at ${accessCount}`}</span>
                )}
              </div>
            </div>
            <ThridPartySSO></ThridPartySSO>
          </form>
        </div>
      }
    </>
  );
};
export default Login;
