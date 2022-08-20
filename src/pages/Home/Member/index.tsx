import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { HomeRoute } from '~/router';

export interface MemberState {
  sort_index: number;
  value: number;
}

const Member = () => {
  const inputChange = () => {};
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const isShow = useLocation().pathname === '/member';
  return (
    <>
      {isShow ? (
        <div className="flex h-full w-full ">
          <form className="m-auto w-[50vw] space-y-6 ">
            <div className="flex flex-col space-y-5 ">
              <Input
                label="Account"
                className="text-white"
                type="text"
                onChange={(e) => setAccount(e.target.value)}
                value={account}
                placeholder="Account"
              />

              <Input
                label="Password"
                className="text-white"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="flex font-bold text-orange-400">
              <Link to="/member/register">Register?</Link>
            </div>
            <div className="flex w-full ">
              <Button onClick={onSubmit} className="m-auto">
                Submit
              </Button>
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
