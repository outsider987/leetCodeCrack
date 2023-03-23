import EraseTool from './Erase';
import BrushTool from './Brush';
import PanTool from './Pan';
import CropTool from './Crop';

export const Tools = {
  BrushTool,
  EraseTool,
  PanTool,
  CropTool,
};

export default function dynamicClass(name: keyof typeof Tools) {
  return Tools[name];
}
