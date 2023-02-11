import EraseTool from './Erase';
import LineTool from './Line';

export const Tools = {
  LineTool: LineTool,
  EraseTool: EraseTool,
};

export default function dynamicClass(name: keyof typeof Tools) {
  return Tools[name];
}
