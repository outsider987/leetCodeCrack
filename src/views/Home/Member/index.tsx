import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HomeRoute } from '~/router';
import Input from 'outsiderreact/dist/components/Input';

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
            inputClassName=""
            type="text"
            setInput={inputChange}
            value={0}
          />
          <Input
            inputClassName=""
            type="text"
            setInput={inputChange}
            value={0}
          />
        </div>
      </form>
    </div>
  );
};
export default Member;
