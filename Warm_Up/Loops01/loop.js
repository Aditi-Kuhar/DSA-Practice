//For loops

for(let i=0;i<=5;i++)
    {
        console.log((i+1)+"Hello\n");
    }

for(let i=3;i<5;i++)
    {
        console.log("Hello");
    }

//HW
for(let i=2 ;i<9 ;i=i+2){
    console.log("hw"+i)
}

//HW
for(i=5;i>0;i--){
    console.log("Aditi");
}

//HW (this condition will be never true)
for(let i=5;i<4;i++){
    console.log("Hello");
}

//HW (Infinite loop- this cond always true)
// for(i=1;i>0;i++){
//     console.log("Kuhar");
// }

//call a function inside a loop
function greet(name,i){
    console.log("Namaste "+name+i)
}
for(let i=0;i<10;i++){
    greet("Aditi",i);
}

//How array and loops work together
let arr=[10,20,30,40,50,60];
let length=arr.length;
console.log(length);
for(let i=0;i<length;i++){
    console.log(arr[i]);
}

//print all even numbers in the array
let arr1=[103,200,3,400,500,799];

for(let i=0;i<arr1.length;i++){
    if(arr1[i]%2==0){
        console.log(arr1[i]);
    }  
}



