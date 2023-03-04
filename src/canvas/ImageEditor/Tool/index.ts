import EraseTool from './Erase';
import PaintTool from './Paint';
import PanTool from './Pan';

export const Tools = {
  PaintTool,
  EraseTool,
  PanTool,
};

export default function dynamicClass(name: keyof typeof Tools) {
  return Tools[name];
}
