type ThowIDoIt = string;
type TsimeArray = (string | number)[];
interface ImyHometask {
  howIDoIt: ThowIDoIt;
  simeArray: TsimeArray;
  withData: { howIDoIt: ThowIDoIt; simeArray: TsimeArray }[];
}

const myHometask: ImyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

function concatStr(a: string, b: string): void {
  const result = a + b;
}

interface MyArray<T> {
  [N: number]: T;
  map<U>(fn: (el: T) => U): U[];
  reduce<T>(fn: (sum: number, current: number) => T): number;
}

const tsArr: MyArray<number> = [1, 2, 3, 4];
tsArr.map((i) => i + 1);
const arr = tsArr.reduce((sum: number, current: number) => {
  return sum + current;
});
