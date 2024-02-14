class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  constructor(
    public door: boolean,
    protected key: Key,
    public tenants: Person[]
  ) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  openDoor(key: Key) {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key, []);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("Невірний ключ");
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
