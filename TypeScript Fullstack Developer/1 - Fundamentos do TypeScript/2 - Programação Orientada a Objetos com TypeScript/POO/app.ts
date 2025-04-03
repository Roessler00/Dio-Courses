class User {
  name: string = "João";
  age: number = 24;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name);
  };
}

const user = new User("João", 24);
user.showName();

const otherUser = new User("Allan", 25);
otherUser.showName();
