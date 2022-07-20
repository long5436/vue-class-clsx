import { vueClassName, config } from './vclsx';

const vclsx = {
  install(app: any, options: any) {
    app.config.globalProperties.vclsx = vueClassName;
    app.provide('config', config(options))
  },
};

const vclsxComponent = vueClassName;

export { vclsx, vclsxComponent };
