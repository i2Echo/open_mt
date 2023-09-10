import { ResourceManager } from "./resource/resourceManager";

export class Game{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private with: number = 800;
    private height: number = 600;
    private sourcePaths: string[] = ["heros"];

    constructor(appContainer: HTMLElement){
        this.canvas = document.createElement("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        
        appContainer.appendChild(this.canvas);
        this.canvas.width = this.with;
        this.canvas.height = this.height;
    }

    private async init(){
        await ResourceManager.loadResources(this.sourcePaths);
    }

    async start(){
        await this.init();
    }

    render(){
        this.ctx.clearRect(0, 0, this.with, this.height);
        this.ctx.drawImage(ResourceManager.getResource("heros"), 0, 0);
    }
    loadScene(scene: any) {
        throw new Error("Method not implemented.");
    }
}