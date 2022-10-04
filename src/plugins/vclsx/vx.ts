import type { ModuleClasses } from './type';

let result: Array<string> = [];
const vueClassName = (
  rawClasses: Array<string>,
  moduleClasses: ModuleClasses
) => {
  result = [];
  result = rawClasses
    .map((item: string) => {
      return moduleClasses[item];
    })
    .filter((e) => e);
  return result;
};

export { vueClassName };
