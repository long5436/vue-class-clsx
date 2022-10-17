import type { Options, App, Plugin } from './type';
import vueClassName from './vclsx';
import handleDirective from './directive';
import { setConfigure, optionsConfigure } from './configure';

const createVClsx: Plugin = {
  install(app: App, options: Options): void {
    setConfigure(options);

    app.config.globalProperties[optionsConfigure.functionName] = vueClassName;
    app.directive(optionsConfigure.directiveName, handleDirective);
  },
};

const vclsxComponent = vueClassName;

export { createVClsx, vclsxComponent };
