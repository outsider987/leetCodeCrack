import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link } from 'react-router-dom';

export interface MemberState {
  sort_index: number;
  value: number;
}

const Register = () => {
  const RegisterInitial = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [registerState, setRegisterState] = useState(RegisterInitial);


  
  useEffect(() => {
    console.log(registerState);
    
  }, [registerState]);

  return (
    <div className="flex h-full w-full ">
      <form className="m-auto w-[50vw] space-y-6">
        <div className="flex w-full flex-row space-x-3">
       
          <Input
            label="@E-mail"
            className="w-full text-white"
            type="text"
            onChange={(e)=>setRegisterState({...registerState,email:e.target.value})}
            value={registerState.email}
            placeholder="fill your mail"
          />

          <Input
            label="Username"
            className="w-full text-white"
            type="text"
            onChange={(e)=>setRegisterState({...registerState,username:e.target.value})}
            value={registerState.username}
            placeholder="username"
          />
        </div>
        <Input
          label="Password"
          className="w-full text-white"
          type="text"
          onChange={(e)=>setRegisterState({...registerState,password:e.target.value})}
          value={registerState.password}
          placeholder="Password"
        />
        <Input
          label="Conform Password"
          className="w-full text-white"
          type="text"
          onChange={(e)=>setRegisterState({...registerState,confirmPassword:e.target.value})}
          value={registerState.confirmPassword}
          placeholder="Conform Password"
        />

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
