import type { Options, App } from './type';
import vueClassName from './vclsx';
import handleDirective from './directive';
import { setConfigure, optionsConfigure } from './configure';

function createVclsx(options?: Options | {}) {
  setConfigure(<Options>options);

  return {
    install(app: App): void {
      app.config.globalProperties[optionsConfigure.functionName] = vueClassName;
      app.directive(optionsConfigure.directiveName, handleDirective);
    },
  };
}

const vclsxComponent = vueClassName;

export { createVclsx, vclsxComponent };
