import type { Options, App } from './type';
import vueClassName from './vclsx';
import handleDirective from './directive';
import { setConfigure, optionsConfigure } from './configure';

const createVclsx = (options?: Options) => {
  setConfigure(<Options>options);

  return {
    install(app: App): void {
      app.config.globalProperties[optionsConfigure.functionName as string] = vueClassName;
      app.directive(optionsConfigure.directiveName as string, handleDirective);
    },
  };
};

const vclsxComponent = vueClassName;

type CreateVclsx = ReturnType<typeof createVclsx>;

export { createVclsx, vclsxComponent };
export type { CreateVclsx };
