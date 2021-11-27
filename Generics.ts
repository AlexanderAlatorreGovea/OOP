interface ClassicUser {
  name: {
    first: string;
    last: string;
  };
}

interface ClassicUser2 {
  name: {
    first: string;
    middle: string;
    last: string;
  };
}

//<T> is a generic and you can put multiple generics <T, S>
//generics are used to merge multiple classes without using any
class UserB<T> {
  name: string;
  public isMale: string;
  age: number;
  email: string;
  public classicUserData: T;

  public mergeClassicUser(params: T) {
    const { name, isMale, age, email } = this;

    this.classicUserData = { name, isMale, age, email, ...params };
  }
}

const user1 = new UserB<ClassicUser>();
user1.mergeClassicUser({
  name: {
    first: "Alex",
    last: "Govea",
  },
});
console.log(user1);
console.log(user1.classicUserData.name.first);

const user2 = new UserB<ClassicUser2>();
user2.mergeClassicUser({
  name: {
    first: "Dylan",
    last: "Israel",
    middle: "Christopher",
  },
});
console.log(user2.classicUserData.name.middle);
