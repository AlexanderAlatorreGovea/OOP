class Address {
  zip: string;
  street: string;
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  name: string;
  age: number;
  phone: number;
  address: string;
  constructor(name) {
    this.name = name;
  }
}

// Option one
class UserBuilder {
  user: User;
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder("Bob")
  .setAge(10)
  .setPhone(1231123)
  .setAddress("5235 Road")
  .build();
console.log(user);
