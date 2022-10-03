import { useCssModule } from 'vue';
import type { Options, Args } from './type';
import { getKeyTrue } from './getKey';

const configure: Options = { cssModuleName: '', functionName: '' };
const keyTrue: { value: Array<string> } = { value: [] };

const vueClassName = (...args: any) => {
  const module = configure.cssModuleName
    ? useCssModule(configure.cssModuleName)
    : useCssModule();

  const keys: string = args.map((key: any) => key);
  const classKey = module;

  keyTrue.value = getKeyTrue(() => {}, args);

  const classNames: Array<any> = keyTrue.value
    .map((key: string) => {
      if (classKey[key] !== undefined) {
        // console.log(classKey[key]);
        return classKey[key];
      }
    })
    .filter((e) => e);

  return classNames.toString().replace(/\,/g, ' ').trim();
};

function config(params: Options) {
  if (params) {
    if (params.hasOwnProperty('cssModuleName')) {
      configure.cssModuleName = params.cssModuleName;
    }
  }
}

export { vueClassName, config };
