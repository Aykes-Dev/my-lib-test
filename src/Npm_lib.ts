export class Npm_Lib {
    private api_key: string;

    constructor(api_key: string) {
        this.api_key = api_key;
    }

    public predict() {
        return this.api_key;
    }
}
