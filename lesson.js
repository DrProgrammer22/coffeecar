"use strict"
// Методы поиска по ДОМ
// let images = document.getElementsByTagName("img");
// console.log(images[0]);
// let coffeeList = document.getElementsByClassName("coffee-item");
// console.log(coffeeList);
// let coffee = document.getElementById("coffee-tea");
// console.log(coffee); //Результат null так как нет айди элемента


// //Современные методы поиска
// let atm = document.querySelector(".atm-container img");
// console.log(atm);
// let coffeeItem = document.querySelector(".coffee-item");
// console.log(coffeeItem);
// let coffeeNames = document.querySelectorAll("span");
// console.log(coffeeNames);
// let buton = document.querySelector(".btn");
// console.log(buton);
// let cup = document.querySelectorAll(".coffee-item img");
// console.log(cup);


// let buttons = document.querySelectorAll(".coffee-item");
// let cappuccinoButton = buttons[1];
// console.log(cappuccinoButton);
// let coffeeList = cappuccinoButton.parentElement;
// console.log(coffeeList);
// let nextCoffee = cappuccinoButton.nextElementSibling;
// console.log(nextCoffee);
// let previusCoffee = cappuccinoButton.previousElementSibling;
// console.log(previusCoffee);
// let cappuccinoChildren = cappuccinoButton.children;
// consloe.log(cappuccinoChildren);
// let cappuccinoText = cappuccinoButton.querySelector("span");
// console.log(cappuccinoText);

//Изменение элементов и сss стилей 
// let bigCup = document.querySelector(".cup");
// bigCup.style.width = "300px";
// bigCup.style.display = "none";
// bigCup.style.display = "";
// bigCup.style.backgroundColor = "gray";
// // /* bigCup.style.transition = "transform 5s";
// // setTimeout(function() {
// //   bigCup.style.transform = "rotate(180deg)";
// // }, 5000); */

//Изменение атрибутов
// let bigCup = document.querySelector(".cup");
// console.log( bigCup.hasAttribute("src"));
// let cupSrc = bigCup.getAttribute("src");
// console.log(cupSrc);
// bigCup.setAttribute("src", "img/cappuccino.png");
// bigCup.removeAttribute("src");

//НЕРАБОТАЕТ!!!!!!!!!!!!!!!!!!!!!!МЕНЯЕТ КАРТИНКИ!
// let cupMove = document.querySelectorAll(".coffee-item");
// let latte = btns[2];
// let latteImage = latte.querySelector("img");
// let latteSrc = latteImage.getAttribute("src");
// let bigCup = document.querySelector(".cup");
// bigCup.setAttribute("src", latteSrc);

// let displayText = document.querySelector(".display-text");
// console.log(displayText.innerText);
// displayText.innerText = "Ваш <b>Купучино</b> готовится";
// displayTest.innerHTML = "Ваш <b>латте</b> готовится";


//Добавить ещё 2 элемента
// let coffeeList = document.querySelector(".coffee-list");
// for(let i = 0; i < 2; i++) {
//   coffeeList.innerHTML = coffeeList.innerHTML +  `
//     <div class="coffee-item">
//       <img src="img/americano.png" alt="Американо">
//       <span>Американо- 50p</span>
//     </div>
//     <div class="coffee-item">
//       <img src="img/latte.jpg" alt="Американо">
//       <span>Латте- 150р</span>
//     </div>
//   `
//   ;
// }

// let changeBtn = document.querySelector(".btn");
// // console.log(changeBtn.className);
// // changeBtn.className = "btn btn-succes btn-block";


// console.log(changeBtn.classList);
// changeBtn.classList.add("p-3") //Добавить класс
// changeBtn.classList.remove("my-2") //Удолить класс
// console.log(changeBtn.classList.contains("btn")); //Проверить наличие тру/фолз


//ПЛАНИРОВАНИЕ
// let coffeeOper = document.querySelector(".coffee-oper");
// setTimeout(function () {
//   coffeeOper.style.backgroundColor = "lightyellow";
// }, 3000);
// setTimeout(function() {
//   coffeeOper.style.backgroundColor = "";
// }, 5000);

// setInterval(function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 100);

//РАБОТАЕТ ИДЕАЛЬНО) МОРГАЕТТТ
// let displayInterval = setInterval(function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 100);

// setTimeout(function() {
//   clearInterval(displayInterval);
// }, 5000);

//ТОДЕ РАБОТАЕТ СМЕНА ТЕКСТА!
// function changeDisplayText() {
//   let display = document.querySelector(".display");
//   display.innerHTML = "Ваш кофе готовится";
// }
// setTimeout(function() {
//   changeDisplayText();
// }, 5000);

//События 
/*
click
mouseover
mouseleave
mousedown
mouseup
dbclick
contextmenu
focus ввод в импут
change - пользователь что то ввел в импут
keydown
keyup
transitionend
submit
*/
//<div onclick="message()">Сообщение</div>
// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Заберите сдачу");
// }

// let changeBtn = document.querySelector(".btn");
// changeBtn.addEventListener("click", function() {
//   alert("Выдаем сдачу");
// });
// changeBtn = document.querySelector(".btn");
// changeBtn.addEventListener("click", function() {
//   alert(" ещё Выдаем сдачу");
// });

// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
// alert("Заберите сдачу");
// };
// changeBtn.onclick = null;

// let changeBtn = document.querySelector(".btn");
// function handler() {
// alert("Выдаем сдачу");
// }
// changeBtn.addEventListener("click", handler);
// changeBtn.removeEventListener("click", handler);

// let cupColor = document.querySelector(".cup");
// cupColor.onclick = function () {
//   let labelCup = document.querySelector(".display");
//   labelCup.style.backgroundColor = "red";
// };

let coffeeButtons = document.querySelectorAll(".coffee-item");
for (let i = 0; i < coffeeButtons.length; i++); {
  coffeeButtons[i].onclick = function() {
  makeCoffee("Американо", 50, this); 
}
}








