declare type Args = Array<Array<Args> | string | ArgsItem | boolean>;
declare type ArgsItem = Array<Array<Args> | string | ArgsItem | boolean> | string | object | boolean;
interface Options {
    functionName?: string;
    cssModuleName?: string;
    directiveName?: string;
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        createVclsx: CreateVclsx;
    }
}

declare function vueClassName(...args: Args): string;

declare const createVclsx: (options?: Options) => {
    install(app: App): void;
};
declare const vclsxComponent: typeof vueClassName;
type CreateVclsx = ReturnType<typeof createVclsx>;

export { CreateVclsx, createVclsx, vclsxComponent };
