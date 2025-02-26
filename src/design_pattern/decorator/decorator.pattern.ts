class Stone {
  protected price: number;

  constructor() {
    this.price = 0;
  }

  getPrice() {
    return this.price;
  }
}

class Diamond extends Stone {
  private stone: Stone;

  constructor(stone: Stone) {
    super();
    this.stone = stone;
  }

  getPrice() {
    return this.stone.getPrice() + 1000;
  }
}

export { Diamond, Stone };

