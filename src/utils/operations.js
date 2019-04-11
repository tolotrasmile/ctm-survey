export const count = (key, value) => (data = []) =>
  data.reduce((acc, i) => (i.data[key] === value ? acc + 1 : acc), 0);

export const filter = (key, value) => (data = []) => data.filter(x => x.data[key] === value);
