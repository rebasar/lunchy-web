export interface Config {
    lunchApi: string;
    googleClientId: string;
}

declare var require: (moduleId: string) => any;
export let config: Config = require('../config.json');
