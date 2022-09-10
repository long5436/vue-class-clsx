import { useCssModule } from 'vue';
import type { Options } from './type';

const configure: Options = { cssModuleName: '', functionName: '' };
const keyTrue: { value: Array<string> } = { value: [] };

function getKeyTrue(...data: any) {
  // console.log(typeof data);
  data.map((e: any) => {
    if (Array.isArray(e)) {
      e.map((e: any) => {
        getKeyTrue(e);
      });
    } else if (typeof e === 'object') {
      Object.keys(e).map((k: any) => {
        if (e[k]) {
          keyTrue.value.push(k);
        }
      });
    } else if (typeof e === 'string') {
      keyTrue.value.push(e);
    } else if (typeof e === 'number') {
      if (e !== 0 && !isNaN(e)) {
        keyTrue.value.push(e.toString());
      }
    }
  });

  return keyTrue;
}

// const vclsx = (...args: any) => {
const vueClassName = (...args: any) => {
  const module = configure.cssModuleName
    ? useCssModule(configure.cssModuleName)
    : useCssModule();

  const keys: string = args.map((key: any) => key);
  const classKey = module;

  keyTrue.value = [];
  getKeyTrue(args);

  const classNames: Array<any> = keyTrue.value
    .map((key: string) => {
      if (classKey[key] !== undefined) {
        // console.log(classKey[key]);
        return classKey[key];
      }
    })
    .filter((e) => e);

  //   console.log(classNames);

  //   console.log(classNames.toString().replace(/\s+/g, ''));

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
