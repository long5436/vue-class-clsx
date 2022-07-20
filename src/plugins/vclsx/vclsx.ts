import { useCssModule } from 'vue';

interface Configure {
  name: string;
}

const keyTrue: { value: Array<string> } = { value: [] };
const configure: Configure = { name: '' };

function getKeyTrue(...data: any) {
  // console.log(typeof data);
  data.map((e: any) => {
    if (e === null || e === undefined) {
    } else if (Array.isArray(e)) {
      e.map((e: any) => {
        getKeyTrue(e);
      });
    } else if (typeof e === 'object') {
      Object.keys(e).map((k: any) => {
        if (e[k]) {
          keyTrue.value.push(k);
        }
      });
    } else if (typeof e === 'string') {
      keyTrue.value.push(e);
    } else if (typeof e === 'number') {
      if (e !== 0 && !isNaN(e)) {
        keyTrue.value.push(e.toString());
      }
    }
  });
}

// const vclsx = (...args: any) => {
const vueClassName = (...args: any) => {
  const module = configure.name ? useCssModule(configure.name) : useCssModule();

  const keys: string = args.map((key: any) => key);
  const classKey = module;

  keyTrue.value = [];
  getKeyTrue(args);

  const classNames: Array<any> = keyTrue.value
    .map((key: string) => {
      if (classKey[key] !== undefined) {
        // console.log(classKey[key]);
        return classKey[key];
      }
    })
    .filter((e) => e);

  //   console.log(classNames);

  //   console.log(classNames.toString().replace(/\s+/g, ''));

  return classNames.toString().replace(/\,/g, ' ').trim();
};

function config(params: any) {
  // console.log('config is, ', params);
  if (params.name) {
    configure.name = params.name;
  }
}

export { vueClassName, config };
