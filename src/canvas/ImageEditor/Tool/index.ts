import EraseTool from './Erase';
import PaintTool from './Paint';

export const Tools = {
  PaintTool: PaintTool,
  EraseTool: EraseTool,
};

export default function dynamicClass(name: keyof typeof Tools) {
  return Tools[name];
}
