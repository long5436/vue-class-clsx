import { useCssModule } from 'vue';
import { getKeyTrue } from './getKey';
import type { Options, Args, ModuleClasses } from './type';

const configure: Options = { cssModuleName: '', functionName: '' };
let keyTrue: Array<string> = [];
let cssModuleKey: ModuleClasses = {};
let resultClasses: string = '';

function vueClassName(...args: Args) {
  cssModuleKey = configure.cssModuleName
    ? useCssModule(configure.cssModuleName)
    : useCssModule();

  keyTrue = getKeyTrue(() => {}, args);

  resultClasses = keyTrue
    .map((key: string) => {
      return cssModuleKey[key] ? cssModuleKey[key] : '';
    })
    .filter((e) => e)
    .join(' ')
    .replace(/\,/g, ' ')
    .trim();

  return resultClasses;
}

function config(params: Options) {
  if (params) {
    if (params.hasOwnProperty('cssModuleName')) {
      configure.cssModuleName = params.cssModuleName;
    }
  }
}

export { vueClassName, config };
