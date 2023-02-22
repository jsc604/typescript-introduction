interface PotentialUser {
  username: string;
  password: string;
};

const login = (user: PotentialUser): boolean => {
  return false;
};

const myUser = {
  age: 42,
  friends: [],
  username: 'jstamos',
  password: "1234"
};

login(myUser);