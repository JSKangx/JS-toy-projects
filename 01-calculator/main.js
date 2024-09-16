"use strict";

// DOM node 객체 얻기
let resultNode = document.querySelector(".result");
let hiddenExp = "";
/*
  (1) 
*/
let isResultDisplayed = false;

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

// 사칙 연산자, %을 계산대에 올려주는 함수
const getOperator = (e) => {
  let regExp = /\d/; // 정규 표현식 : 숫자를 포함하는지
  // 만약 계산대의 수식에 숫자가 포함되어 있다면

  // 마지막 입력이 연산자인지 확인하기 위해 연산자 배열 선언.
  const operators = ["+", "-", "*", "/", "%"];

  let result = resultNode.innerHTML;
  /*
    아래 두 조건을 모두 만족할 때에만 연산자 버튼 작동
    (1) 결과에 숫자가 포함되어 있다면 연산자 버튼이 작동
    (2) 결과의 마지막 입력이 연산자가 아니라면 연산자 버튼 작동
  */
  if (regExp.test(result) && !operators.includes(hiddenExp.slice(-1))) {
    resultNode.innerHTML += e.target.innerHTML;
    hiddenExp += e.target.innerHTML;
    console.log(hiddenExp);
  }
};

// 처음에 나와도 되는 괄호, . 연산자를 계산대에 올려주는 함수
const getInnerHtml = (e) => {
  resultNode.innerHTML += e.target.innerHTML;
  hiddenExp += e.target.innerHTML;
  console.log(hiddenExp);
};

// 숫자를 계산대에 올려놓는 함수
const getNum = (e) => {
  resultNode.innerHTML = hiddenExp;
  resultNode.innerHTML += e.target.innerHTML;
  hiddenExp += e.target.innerHTML;
  console.log(hiddenExp);
};

// 올려진 식을 계산해주는 함수
equalNode.addEventListener("click", () => {
  let regExp = /[()%/x\-+]/;
  // hiddenExp가 빈 문자열일 때 =를 누르면 undefined가 출력되기에, 빈 문자열이 아닐 때만 =가 눌리도록 해줌.
  if (hiddenExp !== "") {
    resultNode.innerHTML = math.evaluate(hiddenExp);
  }
});

// AC 버튼을 누르면 계산대를 리셋해주는 함수
acNode.addEventListener("click", () => {
  resultNode.innerHTML = "";
  hiddenExp = "";
});

// 숫자, 연산자를 얻는 함수
leftParentNode.addEventListener("click", getInnerHtml);
rightParentNode.addEventListener("click", getInnerHtml);
percentNode.addEventListener("click", getOperator);
divideNode.addEventListener("click", getOperator);
timesNode.addEventListener("click", getOperator);
minusNode.addEventListener("click", getOperator);
plusNode.addEventListener("click", getOperator);
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
