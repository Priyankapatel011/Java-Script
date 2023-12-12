//strings --> immutable
//array --> mutable




// sinle line comment == //
// multi line comment == /*huhdbn
//                       ioiuhjkhj
//                       */



// for loop
// while loop
// do while loop
// for-of loop --> for array and String
// for-in loop --> for objects



// for(let i = 0; i <= 100; i++){
//     if(i%2 === 0){
//         console.log("i=", i);
//     }
//     // else{
//     //     console.log("odd no.")
//     // }
// } 



//game
// let guessNo = 21;
// let num = prompt("Guess correct number!😁😊");
// while(num != guessNo){     // "21" != 21
//     num = prompt("Again enter");
// } 
// console.log("You guessed it right");



//Template literals
// let obj = {
//     item : "pen",
//     price : 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");


// let special = `this is a special string called template`
// console.log(special);
// console.log(typeof special);



// //----------------------------

// console.log("Apna\nCollege");
// let name1 = "Apna\nCollege"
// console.log(name1.length);


// console.log("Apna\tCollege");
// let name2 = "Apna\tCollege"
// console.log(name2.length)


//Methods/ Functions
//String Methods in JS

//Strings are immutable(not change)

// let str = "PriyankaPatel"
// let newStr = str.toLowerCase()
// let newS = str.toUpperCase()
// console.log(newStr);
// console.log(newS);

// let myName = "PrIyAnKa"
// myName = myName.toUpperCase();
// console.log(myName);



//remove whitespace from starting and ending
// let my = "    Priyanka Patel    "
// my = my.trim();
// console.log(my);


// let str = "Hello";
// console.log(str.slice(1, 5));
// console.log(str.slice(3));
// console.log(str.slice()); 

// let str1 = "apna";
// let str2 = "college";
// let str = "Hello Priyanka";

// let res = "Hey Microsoft coder!! " + str1 + " " + str2 + " " + str + 123; 
// console.log(res);



// let str = "Hellolololllll";
// console.log(str.replace("lo", "p"));        //only one time



// let str = "Hellolololllll";
// console.log(str.replaceAll("lo", "p"));


// let str = "ILoveJS";

// console.log(str[0]);
// console.log(str.charAt(0));


// string are immutable
// let str = "IloveJS";
// str[0] = "S";
// console.log(str);    //SloveJs  --> not

// let st = "IloveJS";
// st = st.replace("I", "P");
// console.log(st);



// let username = prompt("Enter full name");
// console.log("@" + username + username.length);

// let names = "@".concat(username);
// // console.log(names);
// let fullName = names.concat(username.length);
// console.log(fullName);


// ----------------------------------
//Arrays  --> mutable

// let marks = [10, 20, 23, 33, 40];

// console.log(marks);
// console.log(marks.length);        //properties
// console.log(marks[1]);
// marks[0] = 39;
// console.log(marks);
 
// let heroes = ["ironman", "thor", "hulk", "spiderman"];
// console.log(heroes.length);
// console.log(typeof heroes);

// for(let idx = 0; idx < heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// for(let ele of heroes){
//     console.log(ele);
// }

// for(let ele in heroes){
//     console.log(heroes[ele]);
// }



// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }
// console.log(sum / marks.length);

 

// let array = [250, 645, 300, 900, 50];

// for(let ele of array){
//     ele = ele - 0.1*ele;
// }
// console.log(array);



// let arr = [250, 645, 300, 900, 50];

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] - 0.1*arr[i];
// }
// console.log(arr);


// let array = [250, 645, 300, 900, 50];
// let i = 0;
// for(let ele of array){
//     let offer = 0.1 * ele;
//     array[i] = array[i] - offer;
//     i++;
// }
// console.log(array);




//Array Methods
// let veggies = ["Potato", "Tomato", "Chilli", "Apple", 1];
// veggies.push('Mango');
// // console.log(veggies);
// console.log(typeof veggies[4]);

// // let del = veggies.pop();
// // console.log(veggies);
// // console.log(del);


// console.log(veggies.toString());      //new str return
// console.log(typeof veggies[4]);


// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// // console.log(heroes);

// //unshift --> add ele to start
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);


// //shift --> delete ele from start and return
// dcHeroes.shift();
// console.log(dcHeroes);


// //slice -- doesn't change in original array'
// let marvel = ["thor", "spiderman", "ironman", "antman"];
// console.log(marvel.slice(0, 3));


// //splice -- change in original array
// // add remove replace
// let nums = [1,2,3,4,5,6,7];
// let num = nums.splice(0, 3, 101, 102, 103);
// console.log(nums);
// console.log(num);

// //just add
// let n = [1,2,3,4,5];
// n.splice(2, 0, 101);
// console.log(n);


// //del ele
// let m = [1,2,3,4,5];
// m.splice(2, 1);
// console.log(m);

// let num2 = [1,2,3,4,5,6,7];
// let del = num2.splice(4);
// console.log(num2);
// console.log(del);

// let nums3 = [1,2,3,4];
// console.log(nums3.splice());
// console.log(nums3);



// /********************************* */

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// // companies.shift();
// // console.log(companies);

// companies.splice(2, 1, "Ola");
// console.log(companies);


// companies.push("Amazon");
// console.log(companies);




//FUNCTIONS
// function myFunction() {
//     console.log("Welcome");
//     console.log("Happy😊✌️");    
// }

// myFunction();
// myFunction();


// function myFunction12(msg) {         //parameter
//     console.log(msg);  
// }

// myFunction12("Hello Duniya🌍");    //argument
// myFunction12("Hii Priyanka");


// function sum(a, b) {
//     return a+b;
// }

// let ans = sum(5, 3);
// console.log(ans);


// function sum(a,b) {
//     console.log(sum);
// }

// //2nd way of writin function
//  const arrowSum = (a,b) => {
//     console.log( a + b );
// }

// arrowSum(3,4);


// const arrowMult = (a,b) => {
//     console.log(a*b);
// }
// arrowMult(2,9);

// console.log(arrowMult);

// const arrowMult = (a,b) => {
//     return (a*b);
// }
// console.log(arrowMult(3,4));


// function countVowels(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//             count++;
//         } 
//     }
//     console.log(`Number of vowels will be ${count}`);
// }
// countVowels("Priyanka")


// //using arrow function
// const countVowel = (str) => {
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//             count++;
//         } 
//     }
//     return count;
// }
// console.log(`Number of vowels will be ${countVowel("Priyanka Pinku")}`);

  

//callback function
// let arr = [10,20,30,40,50];
// arr.forEach(function printVal(val) {
//     console.log(val);
// })

//using arrow function
// let arr1 = [10,20,30,40,50];
// arr1.forEach((val) => {
//     console.log(val);
// })
 
// let arr = ['a',  'b', 'c'];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })


// let arr = ['a',  'b', 'c'];
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// })


//"for each method" is not used for arrays and not for strings;
// let arr = ['a',  'b', 'c'];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

//for each method is a higher order function(HOF) or higher order method(HOM);
// --> which either take another () as a parameter or returns any ();


// let arr = [1,2,3,4];

// arr.forEach((val) => {
//     console.log( val*val );    // num ** 2
// })


// let arr = [1,2,3,4];

// arr.forEach((val) => {
//     console.log( val*val );    // num ** 2
// })


// let arr1 = [1,2,3,4];
// const calcSquare = (val) => {
//     console.log( val*val );    // num ** 2
// }

// arr1.forEach(calcSquare);




// map similar to forEach but map creates a new array
// let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
//     return val * 2;
// })

// console.log(newArr);


//filter
// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) => {
//     return val%2 === 0;         //even values
// })
// console.log(evenArr);
// console.log(arr);


// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) => {
//     return val%2 !== 0;         //odd values
// })
// console.log(evenArr);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) => {
//     return val > 3; 
// })
// console.log(evenArr);
// console.log(arr);


//reduce  --> output me only one value
// let arr = [1,2,3,4];
// const output = arr.reduce((res, curr) => {
//     console.log(`result = ${res}`);
//     return res + curr;
// })

// console.log(output);


// let arr = [1,2,3,4];
// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })

// console.log(output);


// let marks = [37, 50, 66, 79, 86, 90, 91, 94];

// let result = marks.filter((val) => {
//     return val > 90;
// })

// console.log(result);


// let marks = [37, 50, 66, 79, 86, 90, 91, 94, 99, 98];

// let result = marks.reduce((prev, curr) => {
//     return prev > 90 ? prev : curr;
// })

// console.log(result);


// let n = prompt("Enter a numder");
// let arr = [];
// for(let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// // console.log(typeof n);

// // let sum = arr.reduce((prev, curr) => {
// //     return prev + curr;
// // })
// // console.log("sum = ", sum);

// let prod = arr.reduce((prev, curr) => {
//     return prev * curr;
// })
// console.log("factorial = ", prod);


// ___  _____   _____
//|   ||    |  |  |  |
//|   ||    |  |  |  |
//|   ||    |  |     |    
//|___||____|  |     |

// console.log("Hello");
// window.console.log("Hello1");
  
// window.document
// console.dir(window.document) --> To print object
//console.log(window.document) --> only print HTML

//window obj represents an open window in a browser. It is browser's object(not JS's) and is automatically created by browser
//It is a global variable with lots of properties and methods.


document.body.style.backgroundColor = "pink";

//DOM --> dynamic changes/manipulation

//DOM MANIPULATION

// Selection with id
// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

// let heading = document.getElementById("headings");
// console.log(heading);
// console.dir(heading);    // null


//selection with class
// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);


// let headings = document.getElementsByClassName("headings");
// console.log(headings);
// console.dir(headings);    // empty html collection


// //selection with tags
// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);


//query selector
// let firstEl = document.querySelector("p");  //only 1st element
// console.log(firstEl);

// let allEl = document.querySelectorAll("p") // select all element  --> return nodelist
// console.log(allEl);
 
// let cls = document.querySelector(".heading");  //only 1st element
// console.log(cls);

// let id = document.querySelector("#heading");  //only 1st element
// console.log(id);



//Properties
// -------------
//1 - tagName
// let btn = document.querySelector(".btn");  //only 1st element
// console.log(btn.tagName);


//DOM TREE -- 1) text node(by default)  2) comment node 3) elements node(using while developing);
// let children = document.querySelector("div div div").children;
// console.log(children);


// let firstCh = document.querySelector("div").firstChild.nodeName;
// console.log(firstCh);

// // let firstCh = document.querySelector("div").firstElementChild;
// // console.log(firstCh);

// let lastCh = document.querySelector("div").lastElementChild;
// console.log(lastCh);


// 2) innerText

// let div = document.querySelector("div");
// console.log(div.innerText);

// console.log(div.innerHTML);

// div.innerText = "abcd";
// console.log(div.innerHTML);

// //innerHTML
// div.innerHTML = "<div> inner div </div>"

//textContent--> show hidden text also

// const heading = document.querySelector("h3");
// console.log(heading.textContent);


//---------------------------------
// let h2 = document.querySelector("h2");
// console.log(h2.innerText);
// console.log(h2.innerText + " from Apna College Student!!");


// let boxes = document.querySelectorAll(".box");
// console.log(box);
// console.log(box[0]);
// console.log(box[1]);
// console.log(box[2]);

// let index = 1;
// for(box of boxes){
//     box.innerText = `new unique valueee ${index}`;
//     index++;
// }

// boxes[0].innerText = "new unique value 1";
// boxes[1].innerText = "new unique value 2";
// boxes[2].innerText = "new unique value 3";


//////////////////////////////

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let names = div.getAttribute("name");
// console.log(names)

//get attribute
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// set attr
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newParaClass"));
// console.log(para.setAttribute("id", "newParaId"))


//style
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.color = "white";

// let color = div.style.backgroundColor = "orange";
// console.log(color);


// div.innerText = "Hello";

// let btn = document.createElement("button");
// btn.innerText = "Click Me";
// console.log(btn);

// let div = document.querySelector("div");
// div.append(btn);

// let div = document.querySelector("div");
// div.prepend(btn);



// let div = document.querySelector("div");
// div.before(btn);


// let div = document.querySelector("div");
// div.after(btn);

// let para = document.querySelector("p");
// para.after(btn);

// let newHeading = document.createElement("h1");
// // newHeading.innerText = "This is a HEADING";
// newHeading.innerHTML = "<i>This is a HEADING!!!</i>";

// // let div = document.querySelector("div");
// // div.before(newHeading);
// //or
// document.querySelector("body").prepend(newHeading);


// //DELETE
// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();



// let btn = document.createElement("button");
// btn.innerText = "Click Me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// btn.style.height = "100px"
// btn.style.width = "200px";
// btn.style.fontSize = "30px"

// console.log(btn);
// // let body = document.querySelector("body");
// // body.prepend(btn);

// document.querySelector("body").prepend(btn);

// let para = document.querySelector("p");

// console.log(para.getAttribute("class"));
// // console.log(para.setAttribute("class", "paragraph"));  //--> removes the styling of para class and apply the styling of paragraph class (overrides)

// //if we want to apply both the styling
// let paragraph = para.classList.add("paragraph");

// para.classList.remove("paragraph"); 




// EVENTS

// let btn1 = document.querySelector(".btn1");
// btn1.onclick = () => {
//     console.log("btn1 is clicked");         // in one time only one function can be handled
// }

// btn1.onclick = () => {
//     console.log("btn1 HANDLER");  //overwrite
// }

// let div = document.querySelector("div");
// div.onmousemove = () => {

//     console.log("div is clicked");
// }


//IMP POINT - in "inline handling of event" and "JS handling of event" , JS handling of event will win and it will be applied

// EVENT Object --  1) e.target 2) e.type  3) e.clientX  4) e.clientY
// let btn1 = document.querySelector(".btn1");
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);  // click
//     console.log(e.target);  
//     console.log(e.clientX, e.clientY);
// }

// let div = document.querySelector("div");
// div.onmousemove = (e) => {
//     console.log("div is clicked");
//     console.log(e);
//     console.log(e.type);  // click
//     console.log(e.target);  
//     console.log(e.clientX, e.clientY);
// }


//EVENT Listeners  (best way)
// -------------------------------------------------------------------------------
// to add -->

// btn1 = document.querySelector(".btn1");

// btn1.addEventListener("click", (e) => {
//     console.log("Namaste Duniya");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// })


//to remove -->
// -----------------------
// btn1 = document.querySelector(".btn1");

// btn1.addEventListener("click", (e) => {
//     console.log("Namaste Duniya handler 1");
// })

// btn1.addEventListener("click", () => {
//     console.log("Namaste Duniya handler 2");
// })

// //callback reference should be same to remove
// const handler3 = () => {
//     console.log("Namaste Duniya handler 3");
// }

// btn1.addEventListener("click", handler3)

// btn1.addEventListener("click", () => {
//     console.log("Namaste Duniya handler 4");
// })

// btn1.removeEventListener("click", handler3);


/////////////////////////////////////////

// let modeBtn = document.querySelector("#mode");
// let currMode = "lightmode"

// let body = document.querySelector("body");

// modeBtn.addEventListener(("click"), () => {
//     // console.log("You are trying to change the mode");
//     // if(currMode === "lightmode"){
//     //     currMode = "darkmode";
//     //     body.style.backgroundColor = "black"
//     //     modeBtn.style.backgroundColor = "grey";
//     //     modeBtn.style.color = "white";
//     // }
//     // else{
//     //     currMode = "lightmode";
//     //     body.style.backgroundColor = "white";
//     //     modeBtn.style.color = "black";
//     // }


//     if(currMode === "lightmode"){
//         currMode = "darkmode";
//         body.classList.add("dark");
//     }
//     else{
//         currMode = "lightmode";
//         body.classList.add("light");
//     }

//     console.log(currMode);


    
// })

// const div = document.querySelector("div");
// div.addEventListener(("mouseover"), () => {
//     div.style.backgroundColor = "orange";
//     div.style.width = "500px";
// })

// div.addEventListener(("mouseout"), () => {
//     div.style.backgroundColor = "blue";
//     div.style.width = "100px";
// })




// const student = {
//     fullName : "Priyanka Patel", //properties/state
//     marks : 99,
//     printMarks : function() { // method/behaviour
//         console.log("marks =", this.marks);    // this.marks = students.marks
//     },

// }

//PROTOTYPE OBJECT

// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     },
    //both are same
    // calcTax2 : function() {
    //     console.log("tax rate is 10%")
    // }
// };

// const arjun = {
//     salary : 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };
// const arjun2 = {
//     salary : 50000,
// };
// const arjun3 = {
//     salary : 50000,
// };
// const arjun4 = {
//     salary : 50000,
// };

// arjun.__proto__ = employee;
// arjun2.__proto__ = employee;
// arjun3.__proto__ = employee;
// arjun4.__proto__ = employee;

//  _________
// |
// |
// |
// |_________
//CLASSES AND OBJECTS
// ----------------------------------------

// class ToyotaCar{
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }

    // setBrand(brand){
    //     this.brandName = brand;        //this.brand = brand;    here this.brand is "obj property" and brand is argument
    // }

// }

// let fortuner = new ToyotaCar("fortuner", 10);     //constructor
// console.log(fortuner);
// fortuner.setBrand("fortuner");

// let rollsRoyce = new ToyotaCar("rollsRoyce", 20);
// console.log(rollsRoyce);
// rollsRoyce.setBrand("rollsRoyce");



//CONSTRUCTOR  --> initialise object
//if no constructor present then automatically make one by default


//Inheritance
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();


//--------------------------
// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("Do nothink");
//     }
// }

// class Engineer extends Person{
//     work() {
//         console.log("Solve problems and build something new and amazing");
//     }
// }

// class Doctor extends Person{
//     work() {
//         console.log("Treat Patients");
//     }
// }

// let priyankaObj = new Engineer();

//if parent and child have same method, child's method will be used --> method overriding



// SUPER keyword
// /////////////////////////////////////
// class Person {
//     constructor() {
//         console.log("enter parent constructor");

//         this.species = "homo sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(branch) {
//         console.log("enter child constructor");
//         super();  ///to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");

//     }

//     work() {
//         console.log("Solve problems and build something new and amazing");
//     }
// }


// let enggObj = new Engineer("chemical engg");


// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat() {
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(name) {
//         // super();
//         super(name);  ///to invoke parent class constructor
//     }

//     work() {
//         super.eat();
//         console.log("Solve problems and build something new and amazing");
//     }
// }


// let enggObj = new Engineer("priyanka");




// let DATA = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User{
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "new value";
//     }

// }
// let student1 = new User("priyanka", "p@email.com");

// let teacher1 = new User("Dean", "dean@gmail.com");


// let admin1 = new Admin("admin", "admin@clg.com");



//ERROR HANDLING
// ----------------------------------------
// try-catch(error)

let a = 5;
let b = 10;

console.log(a);
console.log(b);
console.log(a+b);

try {
    console.log(a+c);
}
catch(error){
    console.log(error);
}

console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(b/a);
console.log(b-a);








































