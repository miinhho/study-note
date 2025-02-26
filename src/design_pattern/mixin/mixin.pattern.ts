const exampleMixin = (superclass: any) =>
  class extends superclass {
    hello() {
      console.log('Hello from the mixin');
    }
  };

class Goodbye {
  goodbye() {
    console.log('Goodbye from the class');
  }
}

export default class HelloGoodbye extends exampleMixin(Goodbye) { }

