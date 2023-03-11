import React from 'react';
import { PanToolAlt as PanIcon, DeleteForever, AutoFixNormal } from '@mui/icons-material';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const BrushTool = (props: Props) => {
  return (
    <button {...props} className="cursor-pointer">
      <PanIcon></PanIcon>
    </button>
  );
};

export default BrushTool;
