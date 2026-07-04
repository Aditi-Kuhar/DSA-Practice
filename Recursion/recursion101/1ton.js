let n=5;
function print(x)
{
    if(x>n){
        return;
    }
    console.log(x);
    print(++x);
}
let x=1;
print(x);
print(" ");
//or

function print1(n) {
    if (n == 0) {
        return;
    }

    print1(n - 1);
    console.log(n);
}

print1(10);