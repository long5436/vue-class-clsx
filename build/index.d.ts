import { App } from 'vue';

declare type Args = Array<Array<Args> | string | Object | boolean>;
interface Options {
    functionName: string;
    cssModuleName: string;
    directiveName: string;
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        createVclsx: Function;
    }
}

declare function vueClassName(...args: Args): string;

declare function createVclsx(options?: Options | {}): {
    install(app: App): void;
};
declare const vclsxComponent: typeof vueClassName;

export { createVclsx, vclsxComponent };
