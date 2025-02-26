import { Color, colorFactory } from "./flyweight.pattern";

const color1 = new Color('red');
const color2 = new Color('green');
const color3 = new Color('blue');
const color4 = new Color('red');

colorFactory.add(color1);
colorFactory.add(color2);
colorFactory.add(color3);
colorFactory.add(color4);

colorFactory.colors.forEach(
  (color) => console.log(color.getColor())
);
