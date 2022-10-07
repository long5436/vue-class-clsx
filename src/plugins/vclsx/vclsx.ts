import { useCssModule } from 'vue';
import { getKeyTrue } from './getKey';
import type { Options, Args, ModuleClasses } from './type';

const configure: Options = { cssModuleName: '', functionName: '' };
let keyTrue: Array<string> = [];
let cssModuleKey: ModuleClasses = {};

function vueClassName(...args: Args) {
  cssModuleKey = configure.cssModuleName
    ? useCssModule(configure.cssModuleName)
    : useCssModule();

  keyTrue = getKeyTrue(() => {}, args);

  return keyTrue
    .map((key: string) => cssModuleKey[key] ? cssModuleKey[key] : '')
    .filter((e) => e)
    .join(' ')
    .replace(/\,/g, ' ')
    .trim();
}

function config(params: Options) {
  if (params && params.hasOwnProperty('cssModuleName')) {
    configure.cssModuleName = params.cssModuleName;
  }
}

export { vueClassName, config };
