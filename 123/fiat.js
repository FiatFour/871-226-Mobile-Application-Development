// tsc FILENAME.ts || ts > js > node FILENAME.js > Output
// boolean | number | string | void | any | null
// var  Function-scoped | let Block-scoped | const Block-scoped and Can't change Value
var name1;
var age;
var salary;
var birthDate;
var email = 'Fiat@gmail.com';
name1 = 'Fiat NG';
age = 99;
salary = 20.00;
birthDate = new Date();
console.log(name1);
console.log(age);
console.log(salary);
console.log(birthDate);
// key: value
var object = {
    id: 1,
    name: "Fiat",
    age: 99
};
console.log(object);
console.log(object.id);
var object_array = [];
object_array.push({ id: 22, name: 'Prayut' });
console.log(object_array);
var aboutme = "My name ".concat(name1, " and My age is ").concat(age);
console.log("My name ".concat(name1, " and My age is ").concat(age));
var nameArray = ['Array0', 'Array1'];
nameArray.push('Anfat');
console.log(nameArray);
/*
if(){
}if else{
}else{
}
*/
var gender = 'M';
//  Condition         true                false
console.log(gender == 'M' ? 'You are Male' : 'You are Female');
var i;
for (i = 0; i < 4; i++) {
    console.log("i = ".concat(i));
}
while (i < 10) {
    console.log('i = ', i);
    i++;
}
showName("Anfat Nilaigan");
function showName(name) {
    console.log(name);
}
