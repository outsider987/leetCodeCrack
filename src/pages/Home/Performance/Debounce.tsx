import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '~/components/Input';
import SvgICon from '~/components/SvgIcon';
import { usePostDatas } from '~/data/post';
import useDebounce from '~/hooks/useDebounce';

const Debounce = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);
  const { data, isLoading, isError } = usePostDatas(debouncedSearch);
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
        <table className="space-y-2 text-center">
          <thead className="border-b bg-gray-800 text-white">
            <th>name</th>

            <th>year</th>
            <th>writer</th>
            <th>description</th>
          </thead>
          <tbody className="max-h-96 ">
            {data.map((post) => (
              <>
                <tr className="border-b border-solid border-white text-white">
                  <td> {post.comic_name}</td>
                  <td> {post.active_years}</td>
                  <td> {post.writer}</td>
                  <td> {post.issue_description}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Debounce;
