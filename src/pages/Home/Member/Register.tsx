import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link } from 'react-router-dom';
import { validateRegexp, validateMethod } from '~/utils/validate';
import { usePrevious } from '~/hooks/Previous';
import { useForm } from '~/hooks/useForm';

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
  const {values, handleChange} = useForm<RegisterState>(RegisterInitial);
  const validator = {
    email: [validateRegexp.email],
    username: [validateRegexp.require, /^([a-zA-Z\d]){15}/],
    password: [validateRegexp.email],
    confirmPassword: [(data: string) => data === values.password],
  };

  const [validatorState, setvalidatorState] = useState(RegisterInitial);
  const [test, setTest] = useState(true);



  const onSubmit = () => {};

  useEffect(() => {
    
  }, [values]);

  return (
    <div className="flex h-full w-full ">
      <form className="m-auto w-[50vw] space-y-6">
        <div className="flex w-full sm:flex-col sm:space-x-0 lg:flex-row lg:space-x-3">
          <Input
            label="@E-mail"
            className="w-full text-white"
            type="text"
            name='email'
            onChange={handleChange
            }
            pattern="^([a-z\d\.-])@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$"
            value={values.email}
            placeholder="fill your mail"
          />

          <Input
            label="Username"
            className="w-full text-white"
            type="text"
            name='username'
            onChange={handleChange
            }
            value={values.username}
            placeholder="username"
          />
        </div>
        <Input
          label="Password"
          className="w-full text-white"
          type="text"
          name='password'
          onChange={handleChange
          }
          value={values.password}
          placeholder="Password"
        />
        <Input
          label="Conform Password"
          className="w-full text-white"
          type="text"
          name='confirmPassword'
          onChange={handleChange
          }
          value={values.confirmPassword}
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
