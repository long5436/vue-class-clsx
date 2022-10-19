import type { Options } from './type';

const optionsConfigure: Options = {
  cssModuleName: '$style',
  directiveName: 'v-class-module',
  functionName: 'vclsx',
};

function setConfigure({ cssModuleName, directiveName, functionName }: Options) {
  if (cssModuleName?.trim()) optionsConfigure.cssModuleName = cssModuleName;
  if (directiveName?.trim()) optionsConfigure.directiveName = directiveName.replace('v-', '');
  if (functionName?.trim()) optionsConfigure.functionName = functionName;
}

export { optionsConfigure, setConfigure };
