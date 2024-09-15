"use strict";

// DOM node 객체 얻기
let resultNode = document.querySelector(".result");

// 배열의 구조분해 할당을 통한 숫자 DOM Node 획득.
const [oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode, zeroNode] = [
  document.querySelector(".one"),
  document.querySelector(".two"),
  document.querySelector(".three"),
  document.querySelector(".four"),
  document.querySelector(".five"),
  document.querySelector(".six"),
  document.querySelector(".seven"),
  document.querySelector(".eight"),
  document.querySelector(".nine"),
  document.querySelector(".zero"),
];

// 배열의 구조분해 할당을 통한 기호 DOM Node 획득
const [leftParentNode, rightParentNode, percentNode, acNode, divideNode, timesNode, minusNode, plusNode, dotNode, equalNode] = [
  document.querySelector(".left-parent"),
  document.querySelector(".right-parent"),
  document.querySelector(".percent"),
  document.querySelector(".ac"),
  document.querySelector(".divide"),
  document.querySelector(".times"),
  document.querySelector(".minus"),
  document.querySelector(".plus"),
  document.querySelector(".dot"),
  document.querySelector(".equal"),
];

// 숫자, 연산자를 계산대에 올려주는 함수
const getInnerHtml = (e) => {
  resultNode.innerHTML += e.target.innerHTML;
};

const getNum = (e) => {
  resultNode.innerHTML += e.target.innerHTML;
};

// 올려진 식을 계산해주는 함수
equalNode.addEventListener("click", () => {
  let result = resultNode.innerHTML;
  resultNode.innerHTML = parseInt(result);
});

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
