// import type { App } from 'vue';
import type { App, ModuleClasses } from './type';
import { getKeyTrue } from './getKey';
import { vueClassName } from './vx';

let classInput: Array<string>;
let moduleClass: any = {};
let cssModuleName: string = '';

const createDirective = (app: App, name: string): void => {
  cssModuleName = name;
};

function changeClasses(el: any, rawClasses: any, props?: any) {
  let classBind = rawClasses;

  if (typeof classBind === 'string') {
    classBind = [classBind];
  }

  classInput = getKeyTrue(() => {}, classBind);

  let result = vueClassName(classInput, moduleClass);
  if (props?.class) {
    let propClasses = props.class;

    if (typeof propClasses === 'string') {
      propClasses = propClasses.split(' ');
    }
    result = [...result, ...propClasses];
    console.log(result);
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
