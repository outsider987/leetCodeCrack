import React, { useRef, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  setColorCallBack: (color: string) => void;
  colorValue: string;
}

const CanvasColorPicker = (props: Props) => {
  // const canvasRef = useRef(null);
  // const [selectedColor, setSelectedColor] = useState({ R: 255, G: 255, B: 255, A: 1 });

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');

  //   // Draw a gradient on the canvas
  //   const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  //   gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
  //   gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
  //   gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
  //   gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
  //   gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
  //   gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
  //   gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');
  //   context.fillStyle = gradient;
  //   context.fillRect(0, 0, canvas.width, canvas.height);
  // }, []);

  // function handlePickerClick(event) {
  //   const canvas = canvasRef.current;
  //   const x = event.nativeEvent.offsetX;
  //   const y = event.nativeEvent.offsetY;
  //   const imageData = canvas.getContext('2d').getImageData(x, y, 1, 1);
  //   const color = {
  //     R: imageData.data[0],
  //     G: imageData.data[1],
  //     B: imageData.data[2],
  //     A: imageData.data[3] / 255,
  //   };
  //   setSelectedColor(color);
  // }

  // const selectedColorString = `rgba(${selectedColor.R}, ${selectedColor.G}, ${selectedColor.B}, ${selectedColor.A})`;

  const { setColorCallBack, colorValue } = props;

  const [color, setColor] = useState(colorValue);
  const handleColorChange = (event) => {
    setColor(event.target.value);

    setColorCallBack(event.target.value);
  };
  useEffect(() => {
    setColor(colorValue);
  }, []);

  return (
    <div>
      {/* <canvas ref={canvasRef} width={50} height={300} onClick={handlePickerClick} style={{ cursor: 'crosshair' }} />
      <div style={{ backgroundColor: selectedColorString, width: '50px', height: '50px' }}></div> */}
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
  );
};

export default CanvasColorPicker;
