import React, { useEffect, useRef } from 'react';
import CanvasImageEditor from '~/canvas/components/ImageEditor/CanvasImageEditor';

const ImageEditor = () => {
  return (
    <div className={`relative m-auto flex h-full max-h-screen w-full flex-col items-center justify-center`}>
      <CanvasImageEditor className="relative  flex h-full w-full  flex-row border border-solid border-white" />
    </div>
  );
};

export default ImageEditor;
