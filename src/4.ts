
class Key {
    private signature: number = Math.random();


    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key){
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person):void {
        if (!this.door) {
            console.log("Door closed!");
            return;
        }

        this.tenants.push(person);
        this.door = false;
    }


    public abstract openDoor(key: Key): void;

}

class MyHouse extends House {

    constructor(key:Key) {
        super(key)
    }

    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

console.log(house);

export {};