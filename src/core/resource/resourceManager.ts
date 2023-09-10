
export class ResourceManager{
    private static loadedResources: Record<string, HTMLImageElement> = {};
    private static basePath = "/assets/images";

    static loadResources(resourceNames: string[]): Promise<void[]>{
        const promises = resourceNames.map((name) => {
            return new Promise<void>((resolve, reject) => {
                const resource = new Image();
                const imgUrl = new URL(`${this.basePath}/${name}.png`, import.meta.url).href
                resource.src = imgUrl;
                resource.onload = () => {
                    this.loadedResources[name] = resource;
                    resolve();
                }
                resource.onerror = (e) => {
                    reject(e);
                }
            })
            }
        );

        return Promise.all(promises);
    }

    static getResource(path: string): HTMLImageElement{
        return this.loadedResources[path];
    }
}