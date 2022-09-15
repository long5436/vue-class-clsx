import type { App } from 'vue';
import { getKeyTrue } from './getKey';
import { vueClassName } from './vx';

import { useCssModule } from 'vue';

let classInput: any;
let moduleClass: any = {};
let cssModuleName: string = '';

const createDirective = (app: App, name: string): void => {
  cssModuleName = name;

  // @ts-ignore
  // moduleClass = app._component?.__cssModules[cssModuleName] || [];
};

const clear = (arr: any) => {
  return false;
};

function changeClasses(el: any, rawClasses: any, props?: any) {
  let classBind = rawClasses;

  if (typeof classBind === 'string') {
    classBind = [classBind];
  }

  classInput = getKeyTrue([clear, classBind]);

  let result = vueClassName(classInput, moduleClass);
  // console.log('updated', result, classBind, classInput);

  if (props?.class) {
    let propClasses = props.class;

    if (typeof propClasses === 'string') {
      propClasses = propClasses.split(' ');
    }
    result = [...result, ...propClasses];
  }

  el.classList.remove(...el.classList);
  el.classList.add(...result);
}

const handleDirective = {
  beforeMount(el: any, binding: any, vnode: any, prevVnode: any) {
    moduleClass =
      vnode?.dirs[0]?.instance?.$options?.__cssModules[cssModuleName];

    changeClasses(el, binding.value, vnode.props);
  },
  updated(el: any, binding: any, vnode: any) {
    moduleClass =
      vnode?.dirs[0]?.instance?.$options?.__cssModules[cssModuleName];
    changeClasses(el, binding.value, vnode.props);
  },
};

export { handleDirective, createDirective };
