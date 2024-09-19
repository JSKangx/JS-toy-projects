"use strict";

// 어디서나 사용해야 하는 노드들은 전역에 선언
let resultNode = document.querySelector(".result");

// 계산기의 결과값이 출력되었는지에 대한 상태관리 변수 선언
let isResultDisplayed = false; // 기본값 : false(출력 안 됨)

// 배열 구조분해 할당을 통한 DOM 노드 획득
const [zeroNode, oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode] = [
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
];

const [leftBracketNode, rightBracketNode, percentNode, acNode, divideNode, timesNode, minusNode, dotNode, equalNode, plusNode] = [
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

// 숫자를 얻어 계산대에 올리는 함수
const getNum = function () {};

// 연산자를 얻어 계산대에 올리는 함수
const getOperator = function () {};

// 버튼의 innerHTML을 얻는 공통 작업을 하는 handler 함수 정의
const addEventListenertoNodes = (nodes, handler) => {
  nodes.forEach((node) => node.addEventListener("click", handler));
};

// 숫자 노드와 연산자 노드를 배열에 모아 놓음
const numNodes = [zeroNode, oneNode, twoNode, threeNode, fourNode, fiveNode, sixNode, sevenNode, eightNode, nineNode];
const operatorNodes = [leftBracketNode, rightBracketNode, percentNode, acNode, divideNode, timesNode, minusNode, dotNode, equalNode, plusNode];

// numNodes와 operatorNodes 배열의 각 요소에 대해 이벤트리스너 적용
addEventListenertoNodes(numNodes, getNum());
addEventListenertoNodes(operatorNodes, getOperator());
