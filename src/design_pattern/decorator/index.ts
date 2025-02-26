import { Diamond, Stone } from "./decorator.pattern";

const stone = new Stone();
const diamond = new Diamond(stone);

console.log(stone.getPrice());
console.log(diamond.getPrice());

export { };
