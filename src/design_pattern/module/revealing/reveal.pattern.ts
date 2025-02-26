let privateNumber = 10;
const publicNumber = 20;

const privateFunction = () => {
  console.log(`Private number: ${privateNumber}`);
};

const setNumber = (num: number) => {
  privateNumber = num;
};

const getNumber = () => {
  privateFunction();
}

const reveal = {
  setNumber,
  getNumber,
  publicNumber
};

export default reveal;

export { };
