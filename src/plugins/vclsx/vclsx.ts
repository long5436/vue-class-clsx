// @ts-expect-error
import { useCssModule } from 'vue';
import type { Args, ModuleClasses } from './type';

import { optionsConfigure } from './configure';
import { filterClassesFromInput } from './utils';

const { cssModuleName } = optionsConfigure;

let filteredClasses: Array<string> = [];
let cssModuleKey: ModuleClasses = {};

function vueClassName(...args: Args): string {
  cssModuleKey = cssModuleName ? useCssModule(cssModuleName) : useCssModule();

  filteredClasses = filterClassesFromInput({ args: [args] });

  return filteredClasses
    .map((key: string) => (cssModuleKey[key] ? cssModuleKey[key] : ''))
    .join(' ')
    .replace(/\\,/g, ' ')
    .trim();
}

export default vueClassName;
