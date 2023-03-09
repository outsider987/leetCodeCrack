import React, { useRef, useEffect, useState } from 'react';

const CanvasColorPicker = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // draw the color spectrum
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgb(255, 0, 0)');
    gradient.addColorStop(0.17, 'rgb(255, 255, 0)');
    gradient.addColorStop(0.34, 'rgb(0, 255, 0)');
    gradient.addColorStop(0.51, 'rgb(0, 255, 255)');
    gradient.addColorStop(0.68, 'rgb(0, 0, 255)');
    gradient.addColorStop(0.85, 'rgb(255, 0, 255)');
    gradient.addColorStop(1, 'rgb(255, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // add event listener for clicks on canvas
    const handleCanvasClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const imageData = ctx.getImageData(x, y, 1, 1).data;
      const newColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
      setColor(newColor);
    };
    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={300} height={50} />
      <p>Selected color: {color}</p>
    </div>
  );
};

export default CanvasColorPicker;
