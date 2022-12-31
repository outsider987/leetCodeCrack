import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '~/components/Input';
import useDebounce from '~/hooks/useDebounce';

const Debounce = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);
  return (
    <div>
      <Input></Input>
      <div></div>
    </div>
  );
};
export default Debounce;
