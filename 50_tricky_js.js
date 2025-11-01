// function fruit(){
//     console.log(name);
//     console.log(price);

//     var name = 'apple';
//     let price = 20;
// }
// fruit();

// // Output:
// // undefined
// // ReferenceError: Cannot access 'price' before initialization

// //2
// for (var i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i), 1000);
// }

// // Output after 1 second:
// // 3
// // 3
// // 3

// //3
// for (let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i), 1000);
// }
// // Output after 1 second:
// // 0
// // 1
// // 2

// //4
// console.warn(+true);
// console.warn(typeof +true);
// // Output:
// // 1
// // number

// //5
// console.warn(!"anil");
// console.warn(typeof("anil"));
// // Output:
// // false
// // string

// //6
// let data = "size";
// const bird = {
//     size: "small"
// };
// console.warn(bird[data]);
// console.warn(bird["size"]);
// console.warn(bird.size);
// console.warn(bird.data);

// // Output:
// // small
// // small
// // small
// // undefined

// //7
// let c = {name: "peter"};
// let d;

// d = c;
// d.name = "john";
// console.log(c.name);
// // Output:
// // john

// //8
// var x
// var x = 5;
// console.log(x);
// // Output:
// // 5

// //9
// var x
// let x = 5;
// console.log(x);
// // Output:
// // SyntaxError: Identifier 'x' has already been declared

// //10
// let a= 3;
// let b= new Number(3);
// console.log(a==b);
// console.log(a===b);
// // Output:
// // true
// // false

// //11
// let nmae ={} //typo
// console.log(name);
// // Output:
// // ReferenceError: name is not defined

// //12
// function fruit(){
//     console.log("woof");
// }
// fruit.name = "apple";
// console.log(fruit());
// // Output:
// // woof
// // undefined

// //13
// function sum(a, b){
//     return a + b;
// }
// console.warn(sum(1,"2"));
// // Output:
// // 12

// //14
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number)
// // Output:
// // 0
// // 2
// // 2

// //15
// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(21);
// // Output:
// // object

// //16
// function getAge(){
//     "use strict"
//     age = 21;
//     console.log(age);
// }
// getAge();
// // Output:
// // ReferenceError: age is not defined

// //16
// const sum = eval("10*10+5");
// console.log(sum);
// // Output:
// // 105

// //17
// sessionStorage.setItem("cool_secret",123)

// //18
// const obj  = {1:"a", 2:"b", 3:"c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// Output:
// true
// true

//19
// const obj  = {a:"one", b:"two", a:"repeat"};
// console.log(obj)
// // Output:
// // { a: 'repeat', b: 'two' }

//20
// for (let i = 0; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }
// // Output:
// // 0
// // 1
// // 2
// // 4

//21
// const foo = () => console.log("first");
// const bar = () => setTimeout(() => console.log("second"), 0);
// const baz = () => console.log("third");
// bar();
// foo();
// baz();
// // Output:
// // first
// // third
// // second

// //23
// const person = {name: "lynda"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21)());
// // Output:
// // lynda is 21
// // lynda is 21

//24
// function sayHi() {
//     return (() => 0)();
// }
// console.log(typeof sayHi());
// // Output:
// // number

//25
// function sayHi() {
//     return ()=>0;
// }
// console.log(typeof sayHi());
// // Output:
// // function

//26
// console.log(typeof typeof 1);
// // Output:
// // string

//27
// const numbers = [1, 2, 3];
// numbers[9] = 11;
// console.log(numbers);
// // Output:
// // [ 1, 2, 3, <6 empty items>, 11 ]

//28

// const numbers = [1, 2, 3];
// numbers[3] = numbers;
// console.log(numbers);
// // Output:
// // [ 1, 2, 3, [Circular] ]

//29
//Everything in JavaScript is either a Primitive or an Object.
// Primitives: string, number, bigint, boolean, undefined, symbol, and null.
// Objects: arrays, functions, dates, and more.

//30
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);
// Output:
// false
// false
// true

//31
// console.warn(setInterval(()=> console.log("hi"), 1000));
// console.warn(setInterval(()=> console.log("hi"), 1000));
// console.warn(setInterval(()=> console.log("hi"), 1000));
// Output:
// 1
// 2
// 3
// (Each number represents the interval ID returned by setInterval)

//32
// console.log([...'rafe']);
// Output:
// [ 'r', 'a', 'f', 'e' ]

//37
// let data = 2 + 3 + '5';
// console.log(typeof data);
// Output:
// string

//38
// console.log(typeof 3 + 4 +"5")
// Output:
// number45

//39
// console.log(typeof (3 + 4 +"5"))
// Output:
// string

//40
// console.log(typeof [])
// Output:
// object

//41
// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(data);
// Output:
// [ undefined, undefined, undefined ]

//42

// function getInfo(member) {
//   member.name = "shupty";
// }
// const person = { name: "Rafe" };
// getInfo(person);
// console.log(person.name);
// Output:
// shupty

//43
// function Car() {
//     this.make = "TATA";
//     return { make: "Mahindra" };
// }
// const myCar = new Car();
// console.log(myCar.make);
// Output:
// Mahindra

//44
// (() => {
//     let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);
// Output:
// undefined
// number

//45
// (() => {
//     let x = y = 10;
// })();
// console.log(typeof y);
// Output:
// number

//46
// (() => {
//     let x = 10;
// })();

// (() => {
//     let x = 10;
// })();
// console.log(x);
// console.log(typeof x)
// Output:
// ReferenceError: x is not defined
// undefined

//47
// (() => {
//     let x = y = 10;
// })();
// (() => {
//     let x = y = 20;
// })();
// console.log(y);
// console.log(x);
// Output:
// 20
// ReferenceError: x is not defined

//48
// let x = 100
// (() => {
//     var x = 20;
// })();
// console.log(x)
// Output:
// 100

//49
// console.warn(!true - true)
// Output:
// -1

//50
// console.warn(true + + "10")
// Output:
// 11