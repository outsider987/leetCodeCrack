import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HomeRoute } from '~/router';
import Input from 'outsiderreact/dist/components/Input';
import Button from 'outsiderreact/dist/components/Button';
// import Input2 from '../../../components/Input';


export interface MemberState {
  sort_index: number;
  value: number;
}

const Member = () => {
  const inputChange = () => {};

  return (
    <div>
      <form>
        <div className='flex flex-col space-y-2'>
          <Input
          label='test'
            inputClassName=""
            type="text"
            setInput={inputChange}
            value={''}
            placeholder='{123}'
          />
          <Input
            inputClassName=""
            type="text"
            setInput={inputChange}
            value={''}
            
          />
          <Button>
            123
          </Button>
          {/* <Input2  label='test'
            inputClassName=""
            type="text"
            setInput={inputChange}
            value={''}
            placeholder='{123}'/> */}
        </div>
      </form>
    </div>
  );
};
export default Member;
