import EraseTool from './Erase';
import BrushTool from './Brush';
import PanTool from './Pan';

export const Tools = {
  BrushTool,
  EraseTool,
  PanTool,
};

export default function dynamicClass(name: keyof typeof Tools) {
  return Tools[name];
}
