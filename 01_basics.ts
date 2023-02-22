let username: string | number = 'Alice';

username = 'Bob';
username = 42;

// username = true;

const numbers: (number | string)[] = [];
numbers.push(42);
numbers.push('hello');

const output = numbers.pop();