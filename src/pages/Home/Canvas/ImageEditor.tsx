import React, { useEffect, useRef } from 'react';
import CanvasImageEditor from '~/canvas/components/ImageEditor/CanvasImageEditor';

const ImageEditor = () => {
  return (
    <div className="relative m-auto flex w-full flex-col items-center justify-center">
      <CanvasImageEditor className="relative  flex h-full w-full max-w-[100vw-(240px)] flex-row border border-solid border-white" />
    </div>
  );
};

export default ImageEditor;
