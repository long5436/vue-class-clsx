import type { CreateVclsx } from './index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export type { App, Plugin } from 'vue';

export declare type Args = Array<Array<Args> | string | ArgsItem | boolean>;
export declare type ArgsItem =
  | Array<Array<Args> | string | ArgsItem | boolean>
  | string
  | object
  | boolean;

export interface Options {
  functionName?: string;
  cssModuleName?: string;
  directiveName?: string;
}

export interface ModuleClasses {
  [key: string]: string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    createVclsx: CreateVclsx;
  }
}
