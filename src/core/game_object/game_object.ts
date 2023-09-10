export interface IPosition {
    x: number;
    y: number;
}
export interface ISize{
    width: number;
    height: number;
}

export abstract class GameObject {
    readonly id: string = '';
    protected position: IPosition = { x: 0, y: 0 };
    protected size: ISize = { width: 0, height: 0 };
    protected image = new ImageBitmap();

    constructor() {
        console.log('GameObject constructor');
    }
}