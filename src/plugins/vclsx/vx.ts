import type { ModuleClasses } from './type';

const vueClassName = (
  rawClasses: Array<string>,
  moduleClasses: ModuleClasses
) => {
  const result: Array<string> = rawClasses
    .map((item: string) => {
      return moduleClasses[item];
    })
    .filter((e) => e);
  return result;
  //   return result.join(' ').replace(/\,/g, ' ').trim();
};

export { vueClassName };
