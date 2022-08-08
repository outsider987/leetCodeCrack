import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link } from 'react-router-dom';

export interface MemberState {
  sort_index: number;
  value: number;
}

const Register = () => {
  const inputChange = () => {};
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex h-full w-full ">
      <form className="m-auto w-[50vw] space-y-6">
        <div className="flex w-full flex-col space-y-5">
          <Input
            label="@E-mail"
            className="text-white"
            type="text"
            setInput={setAccount}
            value={account}
            placeholder="fill your mail"
          />

          <Input
            label="Password"
            className="text-white"
            type="text"
            setInput={setPassword}
            value={password}
            placeholder="Password"
          />
        </div>
        <div className="flex font-bold text-orange-400">
          <Link to="/member">Login?</Link>
        </div>
        <div className="flex w-full ">
          <Button className="m-auto">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default Register;
