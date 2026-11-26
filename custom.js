//                  class-41  event
//html
// mouse event (on + click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseover, mouseleave,)
//keyboard event =  on + keydown, keyup, keypress,
// form & input  events = On + submit , change, focus, blur
//
// /*
//          event types
//          1. mouse event
//          2. keyboard event
//          3. form event
//          4. windows event
//          5. clipboard event
// */
// function checkEvent() {
//   console.log("this is check event");
// }
// // function test() {
//   confirm("do you want to go home?");
// }

// function test2() {
//   console.log("this is key event got it");
// }

// let test = document.querySelector(".test");

// test.onclick = testEvent;
// function testEvent() {
//   console.log("this is test event function got it!");
// }

// let test = document.querySelector(".test");
// test.onclick = testEvent;

// best poddoti
// let test = document.querySelector(".test");
// test.addEventListener("click", testEvent);
// function testEvent() {
//   console.log("this is test event function got it!");
// }

// let test = document.querySelector(".test");
// test.addEventListener("click", checkEvent);
// function checkEvent() {
//   console.log("this is check event got it!");
// }
// // let remove = document.querySelector(".remove");
// // remove.addEventListener("click", () => {
// //   test.removeEventListener("click", testEvent);
// // });

// let remove = document.querySelector(".remove");
// remove.addEventListener("click", () => {
//   test.removeEventListener("click", checkEvent);
// });

// let test = document.querySelector(".test");
// test.addEventListener("click", checkEvent);

// function checkEvent() {
//   console.log("this is check event got it!");
// }
// let remove = document.querySelector(".remove");
// remove.addEventListener("click", () => {
//   test.removeEventListener("click", checkEvent);
// });

// function hello() {
//   console.log("this is event class got it");
// }

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   console.log("First");
// });

// btn.addEventListener("click", function () {
//   console.log("Second");
// });

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", testEvent);
// function testEvent() {
//   console.log("this is first event test");
// }

// btn.addEventListener("click", testEvent);
// function testEvent() {
//   console.log("this is second event test");
// }
// let remove = document.querySelector(".remove");

// remove.addEventListener("click", () => {
//   btn.removeEventListener("click", testEvent);
// });

// let btn = document.querySelector("#btn");

// function firstEvent() {
//   console.log("first event test");
// }

// function secondEvent() {
//   console.log("second event test");
// }

// btn.addEventListener("click", firstEvent);
// btn.addEventListener("click", secondEvent);

// let remove = document.querySelector(".remove");

// remove.addEventListener("click", function () {
//   btn.removeEventListener("click", firstEvent);
// });
// remove.addEventListener("click", function () {
//   btn.removeEventListener("click", secondEvent);
// });

// let btn = document.querySelector("#btn");
// function firstEvent() {
//   console.log("this is first event");
// }
// function secondEvent() {
//   console.log("this is second event");
// }

//// btn.addEventListener("click", firstEvent);
// btn.addEventListener("click", secondEvent);

// let remove = document.querySelector(".remove");
// remove.addEventListener("click", () => {
//   btn.removeEventListener("click", firstEvent);
// });
// remove.addEventListener("click", () => {
//   btn.removeEventListener("click", secondEvent);
// });

///      class-42 & 43

// Understanding “Capturing” & “Bubbling” Phases

// let parent = document.querySelector(".parent");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Hello I am parent");
//   },
//   true,
// );

// let child = document.querySelector(".child");
// child.addEventListener("click", () => {
//   console.log("Hello I am child");
// });

// Event Propagation

// parent.addEventListener("click", () => {
//   console.log("Hello I am parent");
// });

// let child = document.querySelector(".child");
// child.addEventListener("click", (e) => {
//   // event.stopPropagation();
//   e.stopPropagation();
//   console.log("Hello I am child");
// });

// Event Delegation

// let lis = document.querySelectorAll("li");

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//   });`
// });

//     let lis = document.querySelectorAll("li");
// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//   });
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", (e) => {
//   if (e.target.localName == "li") {
//     console.log(e.target.innerText);
//   }
// // });

// let testUl = document.getElementById("test");
// liList = [];
// Array.from({ length: 107 }).forEach((item, index) => {
//   liList.push(`<li>${index + 1}</li>`);
// });
// testUl.innerHTML = liList.join("");
// Drag & Drop

////             Class - 43

// Using “dataset”

// let a = document.querySelector("a");

// a.addEventListener("click", (e) => {
//   e.preventDefault();
//   // let miId = document.querySelector("[data-id]")
//   // let myId = e.target.getAttribute("data-id");
//   let myId = e.target.dataset.id;

//   console.log(myId);
// });

// Getting Element Box Dimensions
// Working with Element Sizes & Positions

// let myChild = document.querySelector(".child");

// let rect = myChild.getBoundingClientRect();
// console.dir(rect);

// Handling Scroll

// let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");

// btn.addEventListener("click", () => {
//   h2.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// let h4 = document.querySelector("h4");
// btn.addEventListener("click", () => {
//   h4.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// let scrollTop = document.getElementById("scrollToTop");
// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;
//   if (scrollY > 100) {
//     scrollToTop.classList.add("show");
//     scrollToTop.classList.remove("hide");
//   } else {
//     scrollToTop.classList.add("hide");
//     scrollToTop.classList.remove("show");
//   }
// });

// scrollToTop.addEventListener("click", () => {
//   window.scrollTo({
//     behavior: "smooth",
//     top: 0,
//   });
// });
// Setting Timers & Intervals

// setTimeout(() => {
//   console.log("ghum teke jago");
// }, 2000);

// setInterval(() => {
//   console.log("sorry");
// }, 2000);

// The “location” object

////               class-44
////        1. Constructor Functions

// let myObj = {
//   name: "abdullah",
//   age: 20,
// };

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let Student1 = new Student("abdullah", 24);

// console.log(Student1);

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let student1 = new Student("abdullah", 23);
// let student2 = new Student("saifullah", 21);
// let student3 = new Student("ahsanullah", 19);
// let student4 = new Student("md-siddik", 17);

// console.log(student1.name);
// console.log(student2.age);

// function one1() {
//   console.log("Hello Abdullah good morning");
// }

// one1();

// let a = 0;

// function two() {
//   a = 10;
//   console.log(a);
// }

// two();

// function one(n1, n2) {
//   console.log(n1 + n2);
// }

// one(10, 20);

// function hello(name) {
//   console.log("Hello " + name);
// }

// hello("abdullah");

// function test() {
//   let a = 10;
//   console.log(15);
// }

// test();

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createBankAccount() {
//   let balance = 1000;

//   return function (amount) {
//     balance = balance + amount;
//     return balance;
//   };
// }

// const account = createBankAccount();

// console.log(account(500));
// console.log(account(200));
// console.log(account(2000));

// JavaScript Closure — Creating a Private Bank Account

function createBankAccount() {
  let balance = 1000;

  return {
    deposit: function (amount) {
      balance = balance + amount;
      return balance;
    },

    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient balance";
      }

      balance = balance - amount;
      return balance;
    },

    checkBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount();

console.log(account.checkBalance()); // 1000

console.log(account.deposit(500)); // 1500

console.log(account.withdraw(300)); // 1200

console.log(account.checkBalance()); // 1200

////                   class-45

//                      string method

// let myStr = "I Love Javascript";

// let output = myStr.includes("I");
// let output = myStr.indexOf("Javascript");
// let output = myStr.startsWith("I");
// let output = myStr.endsWith("Javascript");
// let output = myStr.replace("Javascript", "Allah");
// let output = myStr.repeat(4);
// let output = myStr.trim(4);

// console.log(output);

//                         integer method

// let myNum = "100abdullah";
// let myNum = 100.87329848;

// let output = Number.isInteger(myNum);
// let output = Number.parseFloat(myNum);
// output = myNum.toFixed(2);

// console.log(output);

///                working with Time & Date

let date = new Date();
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
  

//                  introducing "RegEx"


