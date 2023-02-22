interface User {
  id?: number;
  username: string;
  password: string;
}

const user: User = {
  // id: 42,
  username: 'Alice',
  password: '1234'
};

const users: User[] = [];
users.push(user);
// users.push({});