import React, { useEffect, useState, useRef, useCallback } from 'react';

import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';

export interface MemberState {
  sort_index: number;
  value: number;
}

const Member = () => {
  const inputChange = () => {};
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex h-full w-full ">
      <form className="m-auto space-y-6">
        <div className="flex flex-col space-y-5 ">
          <Input
            label="Account"
            className=" w-[50vw] text-white"
            type="text"
            setInput={setAccount}
            value={account}
            placeholder="Account"
          />

          <Input
            label="Password"
            className=" w-[50vw] text-white"
            type="text"
            setInput={setPassword}
            value={password}
            placeholder="Password"
          />
        </div>
        <div className="flex w-full ">
          <Button className="m-auto">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default Member;
