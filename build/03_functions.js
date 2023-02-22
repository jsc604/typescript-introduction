"use strict";
// params/args, return value, name
const sayHello = (name, age) => {
    return `Hello there ${name}`;
};
const returnVal1 = sayHello('bob');
const returnVal2 = sayHello('bob', 42);
const funcReturningPromise = (arg) => {
    return new Promise((resolve) => {
        resolve(arg);
    });
};
funcReturningPromise(42)
    .then(data => { });
const higherOrderFunc = (callback) => {
    callback('alice');
    return false;
};
