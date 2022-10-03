const keyTrue: { value: Array<string> } = { value: [] };

const mapArray = (e) => e.map((e: any) => getKeyTrue(e));

const mapObject = (e) => {
  Object.keys(e).map((k: any) => e[k] ?? keyTrue.value.push(k));
};

const pushString = (e) => {
  keyTrue.value.push(e);
};

const pushNumber = (e) => {
  if (e !== 0 && !isNaN(e)) keyTrue.value.push(e.toString());
};

const getKeyTrue = (...data: any) => {
  if (Array.isArray(data)) {
    const [func] = data;
    if (typeof func === "function") keyTrue.value = [];
  }

  data.map((e: any) => {
    if (Array.isArray(e)) {
      mapArray(e);
    } else if (typeof e === "object") {
      mapObject(e);
    } else if (typeof e === "string") {
      pushString(e);
    } else if (typeof e === "number") {
      pushNumber(e);
    }
  });

  return keyTrue.value;
};

export { getKeyTrue };
