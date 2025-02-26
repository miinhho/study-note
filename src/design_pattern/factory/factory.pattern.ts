class Coke {
  price: number = 10;

  constructor(price: number) {
    this.price = price;
  }
}

class Soda {
  price: number = 5;

  constructor(price: number) {
    this.price = price;
  }
}

class DrinkFactory {
  drinkClass: typeof Coke | typeof Soda;

  constructor() {
    this.drinkClass = Soda;
  }

  createDrink(options: {
    type: 'coke' | 'soda', price: number
  }) {
    const { type, price } = options;

    switch (type) {
      case 'coke':
        this.drinkClass = Coke;
        break;
      case 'soda':
      default:
        this.drinkClass = Soda;
        break;
    }

    return new this.drinkClass(price);
  }
}

const factory = new DrinkFactory();
const coke1 = factory.createDrink({ type: 'coke', price: 20 });
const soda1 = factory.createDrink({ type: 'soda', price: 10 });

console.log(coke1 instanceof Coke);
console.log(soda1 instanceof Soda);

class CokeFactory extends DrinkFactory {
  constructor() {
    super();
    this.drinkClass = Coke;
  }
}

class SodaFactory extends DrinkFactory {
  constructor() {
    super();
    this.drinkClass = Soda;
  }
}

const cokeFactory = new CokeFactory();
const sodaFactory = new SodaFactory();

const coke2 = cokeFactory.createDrink({ type: 'coke', price: 15 });
const soda2 = sodaFactory.createDrink({ type: 'soda', price: 10 });

console.log(coke2 instanceof Coke);
console.log(soda2 instanceof Soda);

export { };
