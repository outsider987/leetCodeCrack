import React, { useState } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { HomeRoute } from '~/router';
import useAuthApi from '~/api/auth';
import { useForm, ValidateType } from '~/hooks/useMyForm';
import { RegexpBindFactory, validateRegexp } from '~/utils/validate';
import { store } from '~/store';
import { setAlertDialog } from '~/store/global';

export interface MemberState {
  sort_index: number;
  value: number;
}
export const LoginInitial = {
  email: 'test.com',
  password: 'T5204t5204-',
};

const Member = () => {
  const [token, setToken] = useState('');
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

  const { POST_LOGIN, GET_TokenTest } = useAuthApi();
  const onSubmit = handleSubmit(async (data) => {
    if (!data) throw 'submit failed';
    const res = await POST_LOGIN(data);
    setToken(JSON.stringify(res.data.data));
  });
  const onTestToken = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    GET_TokenTest().then((res) => {
      store.dispatch(setAlertDialog({ show: true, msg: 'test work' }));
    });
  };

  const isShow = useLocation().pathname === '/member';
  return (
    <>
      {isShow ? (
        <div className="flex h-full w-full ">
          <form className="m-auto w-[50vw] space-y-6 ">
            <div className="flex flex-col space-y-5 ">
              <Input
                name="email"
                label="Account"
                className="text-white"
                type="text"
                onChange={validator.noWhiteSpaceChange}
                value={validator.values.email}
                placeholder="Account"
              />
              <span className=" text-orange-500">{validator.errors.email.message}</span>

              <Input
                name="password"
                label="Password"
                className="text-white"
                type="text"
                onChange={validator.noWhiteSpaceChange}
                value={validator.values.password}
                placeholder="Password"
              />
              <span className=" text-orange-500">{validator.errors.password.message}</span>
            </div>
            <div className="flex font-bold text-orange-400">
              <Link to="/member/register">Register?</Link>
            </div>
            <div className="flex w-full ">
              <Button onClick={onSubmit} className="m-auto">
                Submit
              </Button>
            </div>
            <div className="flex w-full ">
              <Button onClick={onTestToken} className="m-auto">
                TokenTest
              </Button>
              {token}
            </div>
          </form>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
export default Member;
