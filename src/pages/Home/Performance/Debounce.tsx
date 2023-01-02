import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '~/components/Input';
import SvgICon from '~/components/SvgIcon';
import { usePostDatas } from '~/data/post';
import useDebounce from '~/hooks/useDebounce';

const Debounce = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);
  const { data, isLoading } = usePostDatas(debouncedSearch);
  useEffect(() => {}, [debouncedSearch]);
  return (
    <div>
      <Input value={search} onChange={(e) => setSearch(e.target.value)}></Input>
      {isLoading && (
        <>
          <SvgICon name="spin" className="w-5" />
          {isLoading ? 'Loading...' : ''}
        </>
      )}
      {!isLoading && (
        <div>
          {data.map((post) => (
            <>
              <div className="text-white">title: {post.title}</div>
              <div className="text-white">body: {post.body}</div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default Debounce;
