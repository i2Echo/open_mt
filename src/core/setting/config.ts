export class ConfigManager{
    private static defaultConfig: Record<string, any> = {};
    private static configs: Record<string, any> = {};
    private static basePath = "/assets/config";

    static loadConfig(): Promise<void>{
        return new Promise<void>((resolve, reject) => {
            const configUrl = new URL(`${this.basePath}/defaultConfig.json`, import.meta.url).href
            fetch(configUrl)
                .then((response) => response.json())
                .then((data) => {
                    this.defaultConfig = data;
                    resolve();
                })
                .catch((e) => reject(e));
        });
    }

    static getConfigProp<T>(key: string): T{
        return this.defaultConfig[key];
    }
    static getConfigs(){
        return this.configs;
    }
}