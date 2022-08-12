import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link } from 'react-router-dom';
import { validateRegexp, validateMethod } from '~/utils/validate';
import { usePrevious } from '~/hooks/Previous';

export interface MemberState {
  sort_index: number;
  value: number;
}
interface RegisterState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const RegisterInitial = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [registerState, setRegisterState] = useState(RegisterInitial);
  const validator = {
    email: [validateRegexp.email],
    username: [validateRegexp.require,/^([a-zA-Z\d]){15}/],
    password: [validateRegexp.email],
    confirmPassword: [(data:string)=>data===registerState.password],
  };
  const [validatorState, setvalidatorState] = useState(RegisterInitial);
 const [test,setTest] = useState(true)

  const prevRegisterState = usePrevious(
    registerState
  ) as unknown as RegisterState;

  const onSubmit = () => {
    
  };

  useEffect(() => {
    setTest(!test);
console.log(test);
  }, [registerState]);

  return (
    <div className="flex h-full w-full ">
      <form className="m-auto w-[50vw] space-y-6">
        <div className="flex w-full sm:flex-col sm:space-x-0 lg:flex-row lg:space-x-3">
          <Input
            label="@E-mail"
            className="w-full text-white"
            type="text"
            onChange={(e) =>
              setRegisterState({ ...registerState, email: e.target.value })
            }
            pattern="^([a-z\d\.-])@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$"
            value={registerState.email}
            placeholder="fill your mail"
            max={2}
          />
{test &&'1212123'}
          <Input
            label="Username"
            className="w-full text-white"
            type="text"
            onChange={(e) =>
              setRegisterState({ ...registerState, username: e.target.value })
            }
            value={registerState.username}
            placeholder="username"
          />
        </div>
        <Input
          label="Password"
          className="w-full text-white"
          type="text"
          onChange={(e) =>
            setRegisterState({ ...registerState, password: e.target.value })
          }
          value={registerState.password}
          placeholder="Password"
        />
        <Input
          label="Conform Password"
          className="w-full text-white"
          type="text"
          onChange={(e) =>
            setRegisterState({
              ...registerState,
              confirmPassword: e.target.value,
            })
          }
          value={registerState.confirmPassword}
          placeholder="Conform Password"
        />

        <div className="flex font-bold text-orange-400">
          <Link to="/member">Login?</Link>
        </div>
        <div className="flex w-full ">
          <Button onClick={onSubmit} className="m-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Register;
