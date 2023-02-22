interface Dog {
  name: string;
  worms: boolean;
  feedDog: (foodType: string) => boolean;
}

const myDog: Dog = {
  name: 'Bentley',
  worms: false,
  feedDog: (foodType: string) => {
    return true;
  }
}

console.log(myDog.feedDog('cookies'));