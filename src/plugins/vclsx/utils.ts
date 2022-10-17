import typeOf from 'just-typeof';
import type { ModuleClasses, ArgsItem, Args } from './type';

let resultValue: Array<string> = [];

function mapObject({ value }: { value: any }) {
  const d: Array<string> = [];

  Object.keys(value).forEach(function (key: string, index: number) {
    if (value[key]) d.push(key);
  });

  return d;
}

function switchTypeItem({ value }: { value: any }): void {
  const typeItem: string = typeOf(value);

  switch (typeItem) {
    case 'string': {
      resultValue.push(value);
      break;
    }
    case 'array': {
      handleFilterClasses({ args: [...value] });
      break;
    }
    case 'object': {
      const d: Array<string> = mapObject({ value });
      resultValue = resultValue.concat(d);
      break;
    }
    case 'number':
      break;
    case 'function':
      resultValue = [];
      break;
    default:
      break;
  }
}

function handleFilterClasses({ args = [] }: { args?: Args } = {}): void {
  args.map(function (value: ArgsItem) {
    switchTypeItem({ value });
  });
}

function filterClassesFromInput({ args = [] }: { args?: Args } = {}): Array<string> {
  resultValue = [];

  handleFilterClasses({ args: [args] });

  return resultValue;
}

function filterQualifiedClasses({
  rawClasses,
  moduleClasses,
}: {
  rawClasses: Array<string>;
  moduleClasses: ModuleClasses;
}): string[] {
  return rawClasses.map((item: string) => moduleClasses[item]).filter((e) => e);
}

export { filterClassesFromInput, filterQualifiedClasses };
