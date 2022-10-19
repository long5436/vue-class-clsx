import { Plugin } from 'vue';

declare type Args = Array<Array<Args> | string | Object | boolean>;
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        createVclsx: Function;
    }
}

declare function vueClassName(...args: Args): string;

declare const createVClsx: Plugin;
declare const vclsxComponent: typeof vueClassName;

export { createVClsx, vclsxComponent };
