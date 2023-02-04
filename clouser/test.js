const find = (index) => {
  let a = [];
  for (let i = 0; i < 10000; i++) {
    a[i] = i;
  }

  console.log(a[index]);
};
console.time('200');
find(200);
console.timeEnd('200');

const find2 = () => {
  let a = [];
  for (let i = 0; i < 10000; i++) {
    a[i] = i;
  }

  return (index) => {
    console.log(a[index]);
  };
};

console.time('200-2');
const clouser = find2();
clouser(20);
console.timeEnd('200-2');
