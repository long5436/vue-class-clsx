import type { Options, App, Plugin } from './type';
import { vueClassName, config } from './vclsx';
import { handleDirective, createDirective } from './directive';

const createVClsx: Plugin = {
  install(app: App, options: Options) {
    const functionName: string = options?.functionName
      ? options.functionName
      : 'vclsx';

    const directiveName: string = options?.directiveName
      ? options.directiveName
      : 'v-class-module'.toString();

    const cssModuleName: string = options?.cssModuleName
      ? options.cssModuleName
      : '$style';

    const resultDirectiveName = directiveName.replace('v-', '');

    createDirective(app, cssModuleName);

    app.config.globalProperties[functionName] = vueClassName;
    app.provide('config', config(options));
    app.directive(resultDirectiveName, handleDirective);
  },
};

const vclsxComponent = vueClassName;

export { createVClsx, vclsxComponent };
