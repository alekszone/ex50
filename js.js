// 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"
//         22) Create an object with properties such Name, Surname, Email
//         23) Delete Email from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string in the previous array
//         26) Create an array with 100 random numbers in it
//         27) Wrote a function to get the MAX and the MIN from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays and returns the longest one
//         // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
//ex1
let x = "John";
let y = "Doe";
console.log(x,"<>",y);
//ex2
let name={
Name: "aleks",
Surname : "al",
Email: "aleks@email.com"
}

//ex3
delete name.Email;
console.log(name);

//ex4
let array1 =[];
array1.push("one");
array1.push("two");
array1.push("three");
array1.push("four");
array1.push("five");
array1.push("six");
array1.push("seven");
array1.push("eight");
array1.push("nine");
array1.push("ten");


//ex5
console.log(array1);

//ex6
let arr1=[]
for(let i=0;i<100;i++){
arr1[i]=Math.floor(Math.random()*50 +1)
}
console.log(arr1);

//ex7
function random(){
 console.log(Math.max(...arr1));
console.log(Math.min(...arr1));
}
//ex8
function array3 (){
    let arr2=[]
for(let i=0;i<10;i++){
arr2[i]=Math.floor(Math.random()*50 +1)
}
let arr3=[]
for(let i=0;i<10;i++){
arr3[i]=Math.floor(Math.random()*50 +1)
}

let arr4 =[]
arr4 =arr2+" "+arr3;
console.log(arr4)

}
//ex9
function array4 (){
    let arr5=[]
for(let i=0;i<7;i++){
arr5[i]=Math.floor(Math.random()*50 +1)
}
let arr6=[]
for(let i=0;i<10;i++){
arr6[i]=Math.floor(Math.random()*50 +1)
}

let arr7 =[]
arr7 =arr5+" "+arr6;
console.log(arr7)
if(arr5.length<arr6.length){
    console.log("Array arr6 " + arr6 +"is the longest")
}else{
    console.log("Array arr5 " + arr5 +"is the longest")
}

}
//ex10
function array5 (){
    let arr8=[]
    let x=0;
for(let i=0;i<7;i++){
arr8[i]=Math.floor(Math.random()*50 +1)
x=x+i
}
let arr9=[]
let y=0;
for(let i=0;i<10;i++){
arr9[i]=Math.floor(Math.random()*50 +1)
y=y+i
}
if(x>y){
    console.log("Arr8 is bigger" + x)
}else{
    console.log("Arr9 is bigger" + y)
}
}