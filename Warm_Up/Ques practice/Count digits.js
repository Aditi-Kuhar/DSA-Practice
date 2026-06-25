
function countDig(n){
let count=0;
if(n==0){return 1;}
n=Math.abs(n); //convert neg to pos
while(n>0){
    n=Math.floor(n/10);
    count++;
}
return count;
}
let n=256;
console.log(countDig(n));