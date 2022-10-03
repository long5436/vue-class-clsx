const vueClassName = (
  rawClasses: Array<string>,
  moduleClasses: any
): Array<string> => {
  return rawClasses.map((item: string) => moduleClasses[item]).filter((e) => e);
};

export { vueClassName };
