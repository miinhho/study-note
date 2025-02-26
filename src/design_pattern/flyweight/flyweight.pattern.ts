class Color {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

const colorFactory = {
  colors: new Map<string, Color>(),

  create(color: string): Color {
    if (!this.colors.has(color)) {
      const newColor = new Color(color);
      this.colors.set(color, newColor);
      return newColor;
    }

    return this.colors.get(color)!;
  },

  add(color: Color) {
    this.colors.set(color.getColor(), color);
  }
};

export { Color, colorFactory };

