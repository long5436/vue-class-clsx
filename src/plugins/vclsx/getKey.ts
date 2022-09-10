const keyTrue: { value: Array<string> } = { value: [] };

function getKeyTrue(...data: any) {
  if (Array.isArray(data)) {
    const [func, ...rest] = data;

    if (typeof func === 'function') {
      keyTrue.value = [];
    }
  }

  data.map((e: any) => {
    if (Array.isArray(e)) {
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

  return keyTrue.value;
}

export { getKeyTrue };
