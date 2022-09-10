export interface Options {
  functionName?: string;
  cssModuleName?: string;
  directiveName?: string;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    createVclsx: Function;
  }
}
