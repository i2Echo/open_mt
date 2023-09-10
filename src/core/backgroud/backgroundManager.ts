interface BackgroundLayer {
}

export class BackgroundManager {
    private backgroundLayers: BackgroundLayer[] = [];

    constructor() {
    }

    addBackgroundLayer(backgroundLayer: BackgroundLayer) {
        this.backgroundLayers.push(backgroundLayer);
    }

    render() {
        this.backgroundLayers.forEach((backgroundLayer) => {
            // backgroundLayer.render();
        });
    }

    update() {
       
    }
}