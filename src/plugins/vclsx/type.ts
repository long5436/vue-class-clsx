export type { App, Plugin } from 'vue';

export declare type Args = Array<Array<Args> | string | Object | boolean>;
export declare type ArgsItem =
  | Array<Array<Args> | string | Object | boolean>
  | string
  | object
  | boolean;

export interface Options {
  functionName: string;
  cssModuleName: string;
  directiveName: string;
}

export interface ModuleClasses {
  [key: string]: string;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    createVclsx: Function;
  }
}
