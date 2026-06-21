
//create a function which accepts the age and tells whether a prson is eligible to vote or not?
function vote(age){
   if(age<0){
    console.log("Invalid Input");
   }
   else if(age<18){
    console.log("Not Eligible");
   }
   else{
    console.log("Eligible");
   }
}
vote(18);
vote(7);
vote(-7);

//H.W
//create a function to check if number is even or odd
function checkNum(num)
{
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkNum(17);
checkNum(20);

