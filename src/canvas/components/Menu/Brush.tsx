import React from 'react';
import { Brush as BrushIcon, DeleteForever, AutoFixNormal } from '@mui/icons-material';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const BrushTool = (props: Props) => {
  return (
    <button {...props} className="cursor-pointer">
      <BrushIcon></BrushIcon>
    </button>
    
  );
};

export default BrushTool;
