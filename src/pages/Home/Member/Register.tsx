import React, { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
import { Link } from 'react-router-dom';
import { validateRegexp, RegexpBindFactory } from '~/utils/validate';
import { useForm } from '~/hooks/useMyForm';
import useAuthApi from '~/api/auth';
import { setAlertDialog } from '~/store/global';
import { store } from '~/store';

export const RegisterInitial = {
  email: 't978798@gmail.com',
  username: 'T5204t5204-',
  password: 'T5204t5204-',
  confirmPassword: 'T5204t5204-',
};

const Register = () => {
  const validaList = {
    email: [{ validate: validateRegexp.email, message: 'wrong format' }],
    username: [
      { validate: validateRegexp.require, message: 'need value' },
      {
        validate: RegexpBindFactory(/^([a-zA-Z\d]){2,15}/),
        message: 'need 15 ',
      },
    ],
    password: [
      { validate: validateRegexp.password, message: 'password wong format' },
    ],
    confirmPassword: [
      {
        validate: (data: string) => data === validator.values.password,
        message: 'not same pasword',
      },
    ],
  };

  const { validator, handleSubmit } = useForm(RegisterInitial, validaList);

  const onSubmit = handleSubmit(async (data, ispass) => {
    if (ispass) {
      const { POST_REGISTER } = useAuthApi();
      if (data) {
        const res = await POST_REGISTER(data);
      }
    } else {
      store.dispatch(
        setAlertDialog({ show: true, msg: JSON.stringify(validator.errors) })
      );
    }
  });

  return (
    <div className="flex h-full w-full ">
      <form onSubmit={onSubmit} className="m-auto w-[50vw] space-y-6">
        <div className="flex w-full sm:flex-col sm:space-x-0 lg:flex-row lg:space-x-3">
          <div className="flex w-full flex-col">
            <Input
              label="@E-mail"
              className="w-full text-white"
              type="text"
              name="email"
              onChange={validator.noWhiteSpaceChange}
              value={validator.values.email}
              placeholder="fill your mail"
            />
            <span className=" text-orange-500">
              {validator.errors.email.message}
            </span>
          </div>
          <div className="flex w-full flex-col">
            <Input
              label="Username"
              className="w-full text-white"
              type="text"
              name="username"
              onChange={validator.noWhiteSpaceChange}
              value={validator.values.username}
              placeholder="username"
            />
            <span className=" text-orange-500">
              {validator.errors.username.message}
            </span>
          </div>
        </div>
        <Input
          label="Password"
          className="w-full text-white"
          type="password"
          name="password"
          onChange={validator.noWhiteSpaceChange}
          value={validator.values.password}
          placeholder="Password"
        />
        <span className=" text-orange-500">
          {validator.errors.password.message}
        </span>
        <Input
          label="Conform Password"
          className="w-full text-white"
          type="password"
          name="confirmPassword"
          onChange={validator.noWhiteSpaceChange}
          value={validator.values.confirmPassword}
          placeholder="Conform Password"
        />
        <span className=" text-orange-500">
          {validator.errors.confirmPassword.message}
        </span>

        <Link className="flex font-bold text-orange-400" to="/member">
          Login?
        </Link>

        <div className="flex w-full ">
          <Button isWhite={validator.isPass} type="submit" className="m-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Register;
