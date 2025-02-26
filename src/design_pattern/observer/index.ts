import { Observable, Observer } from "./observer.pattern";

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observable = new Observable();

observable.subscribe(observer1, observer2);
observable.notify("Hello, World!");
