class DrawObject {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;
  protected ctx: CanvasRenderingContext2D;
  protected canvas: HTMLCanvasElement;
  constructor() {}
}
export default DrawObject;
