// params/args, return value, name

const sayHello = (name: string, age?: number): string => {
  return `Hello there ${name}`;
};

const returnVal1 = sayHello('bob');
const returnVal2 = sayHello('bob', 42);

const funcReturningPromise = (arg: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(arg);
  });
};

funcReturningPromise(42)
  .then(data => {});

const higherOrderFunc = (callback: (name: string) => void): boolean => {
  callback('alice');
  return false;
};