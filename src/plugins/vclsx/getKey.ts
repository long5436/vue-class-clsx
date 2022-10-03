import typeOf from 'just-typeof';
import mapObject, { mapObjectSkip } from 'map-obj';

import type { ArgsItem, Args } from './type';

let resultValue: Array<string> = [];
let valueTmp: string = '';

const mapper: any = (key: string, val: boolean) => {
  if (val) {
    resultValue.push(key);
  }

  return mapObjectSkip;
};

const handleString = (value: ArgsItem): void => {
  valueTmp = value.toString();
  resultValue.push(valueTmp);
};

const handleObject = (value: Record<string, any> | ArgsItem): void => {
  // @ts-ignore
  mapObject(value, mapper);
};

const func = (...args: Args): void => {
  args.map((value: ArgsItem): void => {
    const typeItem: string = typeOf(value);

    switch (typeItem) {
      case 'string': {
        handleString(value);
        break;
      }
      case 'array': {
        func(...value);
        break;
      }
      case 'object': {
        handleObject(value);
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
  });
};

const getKeyTrue = (...args: Args): Array<string> => {
  func(args);
  return resultValue;
};

export { getKeyTrue };
