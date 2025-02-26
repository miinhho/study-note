class Drink {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  drink() {
    return `${this.name} costs ${this.price}`;
  }
}

type DrinkParams = ConstructorParameters<typeof Drink>;
type DrinkConstructor = new (...args: DrinkParams) => InstanceType<typeof Drink>;
type DrinkOption = {
  name: DrinkParams[0];
  price: DrinkParams[1];
};

class AbstractDrinkFactory {
  drinkTypes: { [key: string]: DrinkConstructor };

  constructor() {
    this.drinkTypes = {};
  }

  getDrink(type: string, options: DrinkOption) {
    const drink = this.drinkTypes[type];
    return drink ? new drink(options.name, options.price) : null;
  }

  registerDrink(type: string, drink: DrinkConstructor) {
    this.drinkTypes[type] = drink;
  }
}

const drinkFactory = new AbstractDrinkFactory();
drinkFactory.registerDrink("coffee", Drink);
drinkFactory.registerDrink("tea", Drink);

const tea = drinkFactory.getDrink("tea", { name: "tea", price: 2 });
console.log(tea?.drink());
