import { GameObject } from "../game_object/game_object";

export abstract class Scene {
    protected gameObjects: GameObject[] = [];
    protected shouldRender: boolean = true;

    constructor() {
        console.log('Scene constructor');
    }

    addGameObject(gameObject: GameObject) {
        this.gameObjects.push(gameObject);
    }

    removeGameObject(gameObject: GameObject) {      
        this.gameObjects = this.gameObjects.filter((obj) => obj.id !== gameObject.id);
    }

    setRenderEnable(enable: boolean) {
        this.shouldRender = enable;
    }

    update() {      
        // this.gameObjects.forEach((obj) => obj.update());
    }

    render() {
        if (!this.shouldRender) {
            return;
        }
    }   
}