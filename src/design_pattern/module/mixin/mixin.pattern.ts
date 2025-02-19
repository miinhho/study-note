const min = (arr: number[]): number =>
  Math.min(...arr);

const privateMixin = () => {
  console.log('Log from privateMixin');
  return min;
}

export const publicMixin = () => {
  console.log('Log from publicMixin');
  return {
    min: privateMixin()
  };
}
