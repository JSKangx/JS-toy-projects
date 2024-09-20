"use strict";

// 어디서나 사용해야 하는 노드들은 전역에 선언
let resultNode = document.querySelector(".result");

// 계산기의 결과값이 출력되었는지에 대한 상태관리 변수 선언
let isResultDisplayed = false; // 기본값 : false(출력 안 됨)

// 배열 구조분해 할당을 통한 DOM 노드 획득
const [zeroNode, oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode, leftBracketNode, rightBracketNode, percentNode, acNode, divideNode, timesNode, minusNode, dotNode, equalNode, plusNode] = [
  document.querySelector(".zero"),
  document.querySelector(".one"),
  document.querySelector(".two"),
  document.querySelector(".three"),
  document.querySelector(".four"),
  document.querySelector(".five"),
  document.querySelector(".six"),
  document.querySelector(".seven"),
  document.querySelector(".eight"),
  document.querySelector(".nine"),
  document.querySelector(".left-bracket"),
  document.querySelector(".right-bracket"),
  document.querySelector(".percent"),
  document.querySelector(".ac"),
  document.querySelector(".divide"),
  document.querySelector(".times"),
  document.querySelector(".minus"),
  document.querySelector(".dot"),
  document.querySelector(".equal"),
  document.querySelector(".plus"),
];

// 이벤트 리스너 등록

// 숫자를 얻어 계산대에 올리는 함수
const getNum = function (e) {
  console.log(e.target.value);
  /*
  숫자가 계산대에 올라갈 때는
  (1) 결과가 출력된 바로 다음이라면 결과값을 초기화 하고 새로운 수식 시작
  (2) 아니라면 이어서 수식 계산
  (3) 상태관리 함수를 false로 변경
  */
};

// 연산자를 얻어 계산대에 올리는 함수
const getOperator = function (e) {
  console.log(e.target.value);

  /*
  연산자가 계산대에 올라가는 조건
  (1) 숫자 없이 먼저 올라가지 못한다.
  (2) 연산자 다음에 바로 올라가지 못한다.

  연산자가 계산대에 올라갈 때
  (1) 결과가 출력된 상태든 아니든, 계산대에 올려져 있는 수식을 이어받아 계산
  (2) 상태관리 함수를 false로 변경
  */
};

// 괄호를 얻어 계산대에 올리는 함수
const getBracket = function (e) {
  console.log(e.target.value);
};

// 계산대를 리셋해주는 함수
acNode.addEventListener("click", () => {});
// 계산대에 올라간 수식을 계산해 주는 함수
equalNode.addEventListener("click", () => {});

// 숫자 노드와 연산자 노드를 배열에 모아 놓음
const numNodes = [zeroNode, oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode];
const operatorNodes = [percentNode, divideNode, timesNode, minusNode, dotNode, plusNode];
const bracketNodes = [leftBracketNode, rightBracketNode];

// 노드 배열의 모든 원소에 대해 다음 함수 실행
const addEventListenertoNodes = (nodes, handler) => {
  nodes.forEach((node) => node.addEventListener("click", handler));
};

// numNodes와 operatorNodes 배열의 각 요소에 대해 이벤트리스너 등록
// 함수를 바로 실행해 버려서는 안 되고, 이벤트가 발생하는 순간 실행되도록 함수명만 넣어줘야 한다.
addEventListenertoNodes(numNodes, getNum);
addEventListenertoNodes(operatorNodes, getOperator);
addEventListenertoNodes(bracketNodes, getBracket);
