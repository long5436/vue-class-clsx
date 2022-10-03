import { useCssModule } from "vue";
import type { Options } from "./type";

const configure: Options = { cssModuleName: "", functionName: "" };
const keyTrue: { value: Array<string> } = { value: [] };

const mapArray = (e) => e.map((e: any) => getKeyTrue(e));

const mapObject = (e) =>
  Object.keys(e).map((k: any) => e[k] ?? keyTrue.value.push(k));

const pushNumber = (e) => {
  if (e !== 0 && !isNaN(e)) {
    keyTrue.value.push(e.toString());
  }
};

function getKeyTrue(...data: any) {
  data.map((e: any) => {
    if (Array.isArray(e)) {
      mapArray(e);
    } else if (typeof e === "object") {
      mapObject(e);
    } else if (typeof e === "string") {
      keyTrue.value.push(e);
    } else if (typeof e === "number") {
      pushNumber(e);
    }
  });

  return keyTrue;
}

const vueClassName = (...args: any) => {
  const module = configure.cssModuleName
    ? useCssModule(configure.cssModuleName)
    : useCssModule();

  const classKey = module;

  keyTrue.value = [];
  getKeyTrue(args);

  const classNames: Array<any> = keyTrue.value
    .map((key: string) => classKey[key] ?? classKey[key])
    .filter((e) => e);

  return classNames.toString().replace(/\,/g, " ").trim();
};

function config(params: Options) {
  if (params && params.hasOwnProperty("cssModuleName")) {
    configure.cssModuleName = params.cssModuleName;
  }
}

export { vueClassName, config };
