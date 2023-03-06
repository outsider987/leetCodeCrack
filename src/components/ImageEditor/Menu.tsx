import React, { useRef, useEffect, useState } from 'react';
import { Brush } from '@mui/icons-material';

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  return <div className=" absolute inset-y-0 left-0">{<Brush></Brush>}</div>;
};

export default Menu;
