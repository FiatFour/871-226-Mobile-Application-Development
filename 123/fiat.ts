// tsc FILENAME.ts || ts > js > node FILENAME.js > Output
// boolean | number | string | void | any | null
// var  Function-scoped | let Block-scoped | const Block-scoped and Can't change Value

let name1: string;
let age: number;
let salary;
let birthDate: any;
let email: string = 'Fiat@gmail.com';

name1 = 'Fiat NG';
age = 99;
salary = 20.00;
birthDate = new Date();

console.log(name1);
console.log(age);
console.log(salary);
console.log(birthDate);

// key: value
let object = {
    id: 1,
    name: "Fiat",
    age: 99
};
console.log(object);
console.log(object.id);

let object_array: Array<{
    id: number, name: string, email?: string
}>=[];

object_array.push({id: 22,name: 'Prayut'});
console.log(object_array);

let aboutme = `My name ${name1} and My age is ${age}`;
console.log( `My name ${name1} and My age is ${age}`);

let nameArray: Array<string> = ['Array0','Array1'];
nameArray.push('Anfat');
console.log(nameArray);

/*
if(){
}if else{
}else{
}
*/

let gender = 'M';
          //  Condition         true                false
console.log(gender == 'M' ? 'You are Male' : 'You are Female');

let i;
for(i = 0; i < 4; i++){
    console.log(`i = ${i}`);
}

while(i<10){
    console.log('i = ', i);
    i++;
}

showName("Anfat Nilaigan");
function showName(name: string):void{
    console.log(name);
}


