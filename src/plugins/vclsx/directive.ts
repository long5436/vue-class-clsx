import type { ModuleClasses } from './type';
import { filterClassesFromInput, filterQualifiedClasses } from './utils';

import { optionsConfigure } from './configure';

const { cssModuleName } = optionsConfigure;
let classInput: Array<string>;
let moduleClass: ModuleClasses = {};

function changeClasses({ el, rawClasses, props }: { el: any; rawClasses: any; props?: any }): void {
  let classBind = rawClasses;

  if (typeof classBind === 'string') {
    classBind = [classBind];
  }

  classInput = filterClassesFromInput({ args: [classBind] });

  let result = filterQualifiedClasses({
    rawClasses: classInput,
    moduleClasses: moduleClass,
  });

  if (props?.class) {
    let propClasses = props.class;

    if (typeof propClasses === 'string') {
      propClasses = propClasses.split(' ');
    }
    result = result.concat(propClasses);
  }

  el.classList.remove(...el.classList);
  el.classList.add(...result);
}

const handleDirective = {
  beforeMount(el: HTMLElement, binding: any, vnode: any): void {
    if (cssModuleName) {
      moduleClass = vnode?.dirs[0]?.instance?.$options?.__cssModules[cssModuleName] || {};
      changeClasses({ el, rawClasses: binding.value, props: vnode.props });
    }
  },

  updated(el: HTMLElement, binding: any, vnode: any): void {
    if (cssModuleName) {
      moduleClass = vnode?.dirs[0]?.instance?.$options?.__cssModules[cssModuleName];
      changeClasses({ el, rawClasses: binding.value, props: vnode.props });
    }
  },
};

export default handleDirective;
