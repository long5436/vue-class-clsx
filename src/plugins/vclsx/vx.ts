import type { ModuleClasses } from './type';

const vueClassName = (
  rawClasses: Array<string>,
  moduleClasses: ModuleClasses
) =>
  rawClasses
    .map((item: string) => moduleClasses[item])
    .filter((e) => e);

export { vueClassName };
