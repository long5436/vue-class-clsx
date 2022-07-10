import plugin from './vclsx';

const vclsx = {
  install(app: any, options: any) {
    app.config.globalProperties.vclsx = plugin;
  },
};

const vclsxComponent = plugin;

export { vclsx, vclsxComponent };
