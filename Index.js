console.log("Jaypal");
{
    var a = 6;
}
/* prefer not to use var
beacause of issue in blocked and functional scope
*/

{
    let b = 7;
}

const c = 123;
// c = 44; not allowed 

console.log(a);
console.table([a,c]);
// outside of scope --> console.log(b);