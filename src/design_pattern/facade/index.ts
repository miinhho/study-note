import FacadePattern from "./facade.pattern";

const facadePattern = new FacadePattern();
facadePattern.get();  // 10
facadePattern.increase();
facadePattern.get();  // 11
facadePattern.set(20);
facadePattern.get();  // 20

export { };
