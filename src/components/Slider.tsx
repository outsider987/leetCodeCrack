import React from 'react';
import { useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  setSizeCallBack: (size: number) => void;
  min?: number;
  max?: number;
}

const Slider = (props: Props) => {
  const { setSizeCallBack, min = 1, max = 100 } = props;
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    const value = min && newValue < min ? min : max && newValue > max ? max : newValue;

    setValue(value);
    setSizeCallBack(value);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const volumeGradient = `linear-gradient(to right, 
      rgba(255, 212, 71, 1) 0%, 
      rgba(255, 161, 71, 1) ${value}%, 
      rgba(255, 84, 84, 1) 100%)`;

  const circlePosition = {
    left: `calc(${value}% - 7px)`,
  };

  return (
    <div className="relative h-4 w-full rounded-full bg-gray-800">
      <div className="h-full rounded-full" style={{ width: `${value}%`, background: volumeGradient }} />
      <div className={`absolute top-0  ${isDragging ? 'block' : 'hidden'}`} style={circlePosition}>
        <div className="h-4 w-4 rounded-full border-2 border-yellow-500 bg-white" />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
        onMouseUp={handleDragEnd}
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  );
};

export default Slider;
