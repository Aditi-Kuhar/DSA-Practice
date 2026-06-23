for(let i=0;i<4;i++){
    let row=" ";
    for(let j=0;j<4;j++){
        row=row+"*"
    }
   console.log(row);
}
console.log("\n");


for(let i=0;i<4;i++){
    let row=" ";
    for(let j=0;j<i+1;j++){
        row=row+"*"
    }
   console.log(row);
}
console.log("\n");


for(let i=0;i<5;i++){
    let row=" ";
    for(let j=0;j<i+1;j++){
        row=row+(j+1);
    }
   console.log(row);
}
console.log("\n"); 


for(let i=0;i<5;i++){
    let row=" ";
    for(let j=0;j<i+1;j++){
        row=row+(i+1);
    }
   console.log(row);
}
console.log("\n");


for(let i=5;i>0;i--){
    let row=" ";
    for(let j=0;j<i;j++){
        row=row+(j+1);
    }
   console.log(row);
}
console.log("\n");
//OR
let n=5;
for(let i=0;i<n;i++){
    let row=" ";
    for(let j=0;j<n-i;j++){
        row=row+(j+1);
    }
   console.log(row);
}
console.log("\n");


for(let i=0;i<n;i++){
    let row=" ";
    for(let j=0;j<n-i;j++){
        row=row+"*";
    }
   console.log(row);
}
console.log("\n");


//by myself
for(let i=0;i<n;i++){
    let row="";
    for(let k=0;k<n-i-1;k++){
        row=row+" ";
    }
    for(let j=0;j<i+1;j++){
        row=row+"*"
    }
   console.log(row);
}
console.log("\n");

//me
n=6;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<=i;j++){
        if(j%2==0){
            row=row+"1";
        }
        else{
            row=row+"0";
        }
    }
    console.log(row);
}
console.log("\n");
//sir
for(let i=0;i<n;i++){
    let row="";
    let toggle=1;
    for(let j=0;j<=i;j++){
        row=row+toggle;
        if(toggle==1){
            toggle=0;
        }
        else{
            toggle=1;
        }
    }
    console.log(row);
}
console.log("\n");

let toggle=1;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row=row+toggle;
        if(toggle==1){
            toggle=0;
        }
        else{
            toggle=1;
        }
    }
    console.log(row);
}

