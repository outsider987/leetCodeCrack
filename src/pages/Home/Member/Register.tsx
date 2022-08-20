import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link } from 'react-router-dom';
import { validateRegexp } from '~/utils/validate';
import { useForm } from 'react-hook-form';
import { useMyForm, ValidateType, ErrorType } from '~/hooks/useMyForm';

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
  const validaList = {
    email: [{ validate: validateRegexp.email, message: '' }],
    username: [
      { validate: validateRegexp.require, message: '' },
      { validate: /^([a-zA-Z\d]){15}/.test, message: '' },
    ],
    password: [{ validate: validateRegexp.password, message: '' }],
    confirmPassword: [
        { validate: validateRegexp.require, message: '' },
    ],
  };

  const { validator ,handleSubmit} = useMyForm(RegisterInitial, validaList);
  
//   const { register, handleSubmit, formState } = useForm();

  const onSubmit = handleSubmit((t) => {
    alert(JSON.stringify(t));
  });
    // const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    //   e.preventDefault();
    // };

  return (
    <div className="flex h-full w-full ">
      <form onSubmit={onSubmit} className="m-auto w-[50vw] space-y-6">
        <div className="flex w-full sm:flex-col sm:space-x-0 lg:flex-row lg:space-x-3">
          <Input
            // {...register('email')}
            label="@E-mail"
            className="w-full text-white"
            type="text"
            name="email"
            onChange={validator.handleChange}
            value={validator.values.email}
            placeholder="fill your mail"
          />

          <Input
            label="Username"
            className="w-full text-white"
            type="text"
            name="username"
            onChange={validator.handleChange}
            value={validator.values.username}
            placeholder="username"
          />
        </div>
        <Input
          label="Password"
          className="w-full text-white"
          type="text"
          name="password"
          onChange={validator.handleChange}
          value={validator.values.password}
          placeholder="Password"
        />
        <Input
          label="Conform Password"
          className="w-full text-white"
          type="text"
          name="confirmPassword"
          onChange={validator.handleChange}
          value={validator.values.confirmPassword}
          placeholder="Conform Password"
        />

        <div className="flex font-bold text-orange-400">
          <Link to="/member">Login?</Link>
        </div>
        <div className="flex w-full ">
          <Button type="submit" className="m-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Register;
