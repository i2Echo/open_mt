import { Scene } from "./scene";

export class SceneManager{
    private static currentScene: Scene | null = null;

    static loadScene(scene: Scene){
        this.currentScene = scene;
    }

    static update(){
        if(this.currentScene){
            this.currentScene.update();
        }
    }

    static render(){
        if(this.currentScene){
            this.currentScene.render();
        }
    }
}