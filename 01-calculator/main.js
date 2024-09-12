"use strict";

// DOM node 객체 얻기
let resultNode = document.querySelector(".result");
let leftParentNode = document.querySelector(".left-parent");
let rightParentNode = document.querySelector(".right-parent");
let percentNode = document.querySelector(".percent");
let acNode = document.querySelector(".ac");
let divideNode = document.querySelector(".divide");
let timesNode = document.querySelector(".times");
let minusNode = document.querySelector(".minus");
let plusNode = document.querySelector(".plus");
let dotNode = document.querySelector(".dot");
let oneNode = document.querySelector(".one");
let twoNode = document.querySelector(".two");
let threeNode = document.querySelector(".three");
let fourNode = document.querySelector(".four");
let fiveNode = document.querySelector(".five");
let sixNode = document.querySelector(".six");
let sevenNode = document.querySelector(".seven");
let eightNode = document.querySelector(".eight");
let nineNode = document.querySelector(".nine");
let zeroNode = document.querySelector(".zero");

// 숫자, 연산자를 계산대에 올려주는 함수
const getInnerHtml = (e) => {
  resultNode.innerHTML += e.target.innerHTML;
  console.log(e.target.innerHTML);
};

const getNum = (e) => {
  resultNode.innerHTML += e.target.innerHTML;
  console.log(parseInt(e.target.innerHTML));
};

// 계산대를 리셋해주는 함수
acNode.addEventListener("click", () => {
  resultNode.innerHTML = "";
});

// 숫자, 연산자를 얻는 함수
leftParentNode.addEventListener("click", getInnerHtml);
rightParentNode.addEventListener("click", getInnerHtml);
percentNode.addEventListener("click", getInnerHtml);
divideNode.addEventListener("click", getInnerHtml);
timesNode.addEventListener("click", getInnerHtml);
minusNode.addEventListener("click", getInnerHtml);
plusNode.addEventListener("click", getInnerHtml);
dotNode.addEventListener("click", getInnerHtml);
oneNode.addEventListener("click", getNum);
twoNode.addEventListener("click", getNum);
threeNode.addEventListener("click", getNum);
fourNode.addEventListener("click", getNum);
fiveNode.addEventListener("click", getNum);
sixNode.addEventListener("click", getNum);
sevenNode.addEventListener("click", getNum);
eightNode.addEventListener("click", getNum);
nineNode.addEventListener("click", getNum);
zeroNode.addEventListener("click", getNum);
