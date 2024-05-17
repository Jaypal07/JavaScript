let arr = [1,2,3];
console.log(arr);
let ar = arr;
console.log(ar);

ar[0]="5"; // shallow copy
console.log(ar);
console.log(arr);