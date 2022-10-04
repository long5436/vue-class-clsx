import { Plugin } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        createVclsx: Function;
    }
}

declare const createVClsx: Plugin;
declare const vclsxComponent: (...args: any) => string;

export { createVClsx, vclsxComponent };
