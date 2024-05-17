let arr = [1,2,3];
// console.log(arr);
let ar = arr;
// console.log(ar);

ar[0]="5"; // shallow copy
// console.log(ar);
// console.log(arr);

const m = ['1', '2', '3'];
const l = ['4', '5', '6'];

// m.push(l);

// console.log(m);
// console.log(m[3]);

const n= m.concat(l); // concat return new array

console.log(n);

let o = [...m, ...l, ...m];

console.log(o);