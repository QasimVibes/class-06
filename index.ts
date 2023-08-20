// Write a program sum of all numbers between 1 to 100
let plus=0;
let list:number[]=[]
for (let index = 1; index <= 100; index++){
    if (index % 2==0) {
        plus+=index;
        list.push(index);
    } 

}
console.log("Sum " ,plus ,list);